import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD

import './Login.css';
import api from '../services/api';
=======
import './Login.css';
>>>>>>> 5a616746e2ab16f71d663d28101d3d67e88a271f

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    if (email && senha) {
      navigate('/home');
=======

    // Simulação de login bem-sucedido
    if (email && senha) {
      navigate('/home'); // Mude conforme sua rota
>>>>>>> 5a616746e2ab16f71d663d28101d3d67e88a271f
    } else {
      alert('Preencha todos os campos.');
    }
  };

  return (
<<<<<<< HEAD
    <div className="container">
      
      

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

        <div className="remember-forgot" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <label>
            <input type="checkbox" /> Lembrar senha
          </label>
          <a href="#">Esqueci minha senha</a>
        </div>

        <button type="submit" className="login">
          Login
        </button>

        <div className="register-link" style={{ marginTop: '20px' }}>
          <p>
            Não tem uma conta? registre-se{' '}
            <a onClick={() => navigate('/cadastro')} style={{ cursor: 'pointer' }}>
              Cadastre-se
            </a>
          </p>
        </div>
      </form>
=======
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
>>>>>>> 5a616746e2ab16f71d663d28101d3d67e88a271f
    </div>
  );
};

export default Login;
