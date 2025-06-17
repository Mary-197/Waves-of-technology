import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
<<<<<<< HEAD
import api from '../services/api';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !age || !senha || !confirmaSenha) {
      alert('Preencha todos os campos.');
      return;
    }
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      await api.post('/cadastro', {
        name,
        email,
        age: Number(age),
        senha,
      });

      alert('Usuário cadastrado com sucesso!');
      navigate('/home');
    } catch (error) {
      alert('Erro ao cadastrar. Verifique os dados.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastro</h1>
      <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="Idade" type="number" value={age} onChange={e => setAge(e.target.value)} required />
      <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
      <input placeholder="Confirme a senha" type="password" value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;
=======

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    // Simule um cadastro (ou envie via fetch/axios para o backend)
    alert('Cadastro realizado com sucesso!');
    navigate('/'); // voltar para a tela de login
  };

  return (
    <div>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
      </head>

      <div className="Logo">
        <img src="/img/Logo.png" alt="Logo" className="logo" />
      </div>

      <main className="container">
        <form onSubmit={handleSubmit}>
          <h1>Cadastro</h1>

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
              type={mostrarSenha ? 'text' : 'password'}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="input-box">
            <input
              type={mostrarSenha ? 'text' : 'password'}
              placeholder="Confirme a sua senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
            <i
              className="bi bi-eye-fill"
              id="btn-senha"
              style={{ cursor: 'pointer' }}
              onClick={() => setMostrarSenha(!mostrarSenha)}
            ></i>
          </div>

          <button type="submit" className="login">
            Cadastrar
          </button>

          <div className="register-link">
            <p>
              Já tem uma conta?{' '}
              <a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                faça login
              </a>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Cadastro;
>>>>>>> 5a616746e2ab16f71d663d28101d3d67e88a271f
