import express from 'express';
import cors from 'cors';

import usersRoutes from './routes/usersRouters.js';
import quizRoutes from './routes/quizroutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/quiz', quizRoutes);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

