import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';

const app = express();
const port = 3002;
const saltRounds = 10;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./usuarios.db');

// Cria a tabela se não existir
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  idade INTEGER NOT NULL,
  senha TEXT NOT NULL
)`);

// Cadastro (com idade e confirmação de senha)
app.post('/cadastro', async (req, res) => {
  try {
    const { nome, email, idade, senha, confirmarSenha } = req.body;

    if (!nome || !email || !idade || !senha || !confirmarSenha) {
      return res.status(400).json({ erro: 'Todos os campos são obrigatórios!' });
    }
    
    if (senha !== confirmarSenha) {
      return res.status(400).json({ erro: 'As senhas não coincidem!' });
    }

    const senhaHash = await bcrypt.hash(senha, saltRounds);
    db.run(`INSERT INTO usuarios (nome, email, idade, senha) VALUES (?, ?, ?, ?)`, [nome, email, idade, senhaHash], function (err) {
      if (err) return res.status(400).json({ erro: 'Email já cadastrado ou erro ao cadastrar.' });
      res.json({ mensagem: 'Usuário cadastrado com sucesso!' });
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) return res.status(400).json({ erro: 'Email e senha são obrigatórios!' });

    db.get(`SELECT * FROM usuarios WHERE email = ?`, [email], async (err, row) => {
      if (err || !row) return res.status(401).json({ erro: 'Email não encontrado' });

      const senhaValida = await bcrypt.compare(senha, row.senha);
      if (!senhaValida) return res.status(401).json({ erro: 'Senha incorreta' });

      res.json({ mensagem: 'Login bem-sucedido', usuario: { id: row.id, nome: row.nome, email: row.email, idade: row.idade } });
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});