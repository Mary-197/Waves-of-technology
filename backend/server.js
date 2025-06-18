import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // Permitir requisições do frontend

let db;

// Inicializa o banco antes de aceitar requisições
const initDB = async () => {
    db = await open({
        filename: "./database.db",
        driver: sqlite3.Database,
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS quiz (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pergunta TEXT NOT NULL
        );
    `);

    console.log("Banco de dados SQLite conectado!");
};

// **Esperar a inicialização antes de registrar as rotas**
initDB().then(() => {
    app.post("/cadastro", async (req, res) => {
        const { nome, email, senha } = req.body;
        try {
            await db.run(`INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`, [nome, email, senha]);
            res.json({ mensagem: "Usuário cadastrado com sucesso!" });
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    });

    app.post("/login", async (req, res) => {
        const { email, senha } = req.body;
        try {
            const usuario = await db.get(`SELECT * FROM usuarios WHERE email = ? AND senha = ?`, [email, senha]);
            if (!usuario) return res.status(400).json({ erro: "Usuário ou senha incorretos!" });
            res.json({ mensagem: "Login bem-sucedido!", usuario });
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    });

    app.get("/quiz", async (req, res) => {
        try {
            const perguntas = await db.all(`SELECT * FROM quiz`);
            res.json(perguntas);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    });

    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch((err) => {
    console.error("Erro ao inicializar banco de dados:", err.message);
});