import express from 'express';
import pool from '../database.js';


const router = express.Router();

// Cadastro de usuário
router.post('/register', async (req, res) => {
  const { name, email, age, senha } = req.body;

  if (!name || !email || !age || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO users (name, email, age, senha) VALUES (?, ?, ?, ?)',
      [name, email, age, senha]
    );
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', userId: result.insertId });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Email já cadastrado.' });
    }
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Login de usuário
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
  }

  try {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE email = ? AND senha = ?',
      [email, senha]
    );
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    // Aqui você pode gerar um token JWT, por exemplo
    res.json({ message: 'Login realizado com sucesso!', user: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

export default router;
