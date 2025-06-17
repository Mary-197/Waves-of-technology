// db.ts
import mysql from 'mysql2/promise';

// conexões
const pool = mysql.createPool({
  host: '127.0.0.1',   // Ou 'localhost'
  user: 'root',
  password: '1977Mary',
  database: 'Projetobd',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Função para testar a conexão
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log(' Conectado ao MySQL com sucesso!');
    connection.release();
  } catch (error) {
    console.error(' Erro ao conectar ao MySQL:', error);
  }
}


export default pool;
