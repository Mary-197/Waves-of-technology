import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulação de login bem-sucedido
    if (email && senha) {
      navigate('/home'); // Mude conforme sua rota
    } else {
      alert('Preencha todos os campos.');
    }
  };

  return (
    <div>
     
      <div className="Logo">
        <img src="/img/Logo.png" alt="Logo" className="logo" />
      </div>

      <main className="container">
        <form onSubmit={handleSubmit}>
          <h1>Login tech</h1>

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
              <input type="checkbox" />
              Lembrar senha
            </label>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="submit" className="login">
            Login
          </button>

          <div className="register-link">
            <p>
              Não tem uma conta? registre-se{' '}
              <a onClick={() => navigate('/cadastro')} style={{ cursor: 'pointer' }}>
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
