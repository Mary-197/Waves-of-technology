const pool = require('../config/database');
const bcrypt = require('bcryptjs');

const cadastrar = async (req, res) => {
  const { name, email, age, senha } = req.body;

  if (!name || !email || !age || !senha) {
    return res.status(400).json({ error: 'Preencha todos os campos' });
  }

  try {
    // Verifica se email já existe
    const [existing] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }

    // Hash da senha
    const hashedSenha = await bcrypt.hash(senha, 8);

    await pool.execute(
      'INSERT INTO users (name, email, age, senha) VALUES (?, ?, ?, ?)',
      [name, email, age, hashedSenha]
    );

    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no cadastro' });
  }
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'Preencha email e senha' });
  }

  try {
    const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    const user = users[0];

    // Verifica senha
    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Retorna dados básicos do usuário (pode incluir token JWT aqui depois)
    res.json({ id: user.id, name: user.name, email: user.email, age: user.age });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no login' });
  }
};

module.exports = { cadastrar, login };
