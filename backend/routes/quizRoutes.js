import express from 'express';
import pool from '../database.js';

const router = express.Router();

// Pegar perguntas do quiz
router.get('/questions', (req, res) => {
  const perguntas = [
    "Pergunta 1?",
    "Pergunta 2?",
    "Pergunta 3?",
    "Pergunta 4?",
    "Pergunta 5?",
    "Pergunta 6?",
    "Pergunta 7?",
    "Pergunta 8?",
    "Pergunta 9?",
    "Pergunta 10?"
  ];
  res.json(perguntas);
});

// Salvar respostas do quiz e resultado
router.post('/submit', async (req, res) => {
  const { userId, respostas, resultadoId } = req.body;

  if (!userId || !respostas || !resultadoId) {
    return res.status(400).json({ error: 'Campos userId, respostas e resultadoId são obrigatórios.' });
  }

  try {
    const respostasJson = JSON.stringify(respostas);

    const [result] = await pool.query(
      'INSERT INTO quizzes (userId, respostas, resultadoId) VALUES (?, ?, ?)',
      [userId, respostasJson, resultadoId]
    );

    res.status(201).json({ message: 'Quiz salvo com sucesso!', quizId: result.insertId });
  } catch (err) {
    console.error(' Erro ao salvar quiz:', err);
    res.status(500).json({
      error: 'Erro no servidor.',
      message: err.message,
      stack: err.stack
    });
  }
});

export default router;

