import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!email || !senha) {
      setErro("❌ Preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/login", { email, senha });

      if (response.status === 200 && response.data.mensagem === "Login bem-sucedido!") {
        navigate("/home");
      } else {
        setErro("❌ Usuário ou senha incorretos.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setErro(`❌ Erro ao conectar ao servidor: ${error.message}`);
      } else {
        setErro("❌ Erro desconhecido.");
      }
    }
  };

  return (
    <div>
      <main className="container">
        <form onSubmit={handleSubmit}>
          <h1>Login Tech</h1>

          {erro && <p className="error-message">{erro}</p>}

          <div className="input-box">
            <input
              placeholder="Usuário"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input
              placeholder="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Lembrar senha
            </label>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="submit" className="login">Login</button>

          <div className="register-link">
            <p>
              Não tem uma conta?{" "}
              <a onClick={() => navigate("/cadastro")} style={{ cursor: "pointer" }}>
                Cadastre-se
              </a>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
