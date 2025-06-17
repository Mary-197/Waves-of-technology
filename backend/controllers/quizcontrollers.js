const pool = require('../config/database');

const salvarQuiz = async (req, res) => {
  const { userId, respostas, resultadoId } = req.body;

  if (!userId || !respostas || !resultadoId || !Array.isArray(respostas) || respostas.length !== 10) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  try {
    const respostasJSON = JSON.stringify(respostas);

    const [result] = await pool.execute(
      'INSERT INTO quizzes (userId, respostas, resultadoId) VALUES (?, ?, ?)',
      [userId, respostasJSON, resultadoId]
    );

    res.status(201).json({ message: 'Quiz salvo com sucesso', quizId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar quiz' });
  }
};

module.exports = { salvarQuiz };
