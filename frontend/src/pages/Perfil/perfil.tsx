// src/pages/Perfil/Perfil.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './perfil.css';


export default function Perfil() {
  const navigate = useNavigate();

  return (
    <main className="perfil-container">
      <h2>Perfil</h2>
      <div className="form-grid">
        <div className="input-group">
          <label htmlFor="nome">Nome do usuário</label>
          <input id="nome" type="text" value="João da Silva" disabled />
        </div>
        <div className="input-group">
          <label htmlFor="porcentagem">Porcentagem</label>
          <input id="porcentagem" type="text" value="85%" disabled />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value="joao@email.com" disabled />
        </div>
        <div className="input-group senha">
          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" value="********" disabled />
          <button 
            className="edit-button" 
            onClick={() => navigate('/perfil-edicao')}
            type="button"
          >
            Editar perfil
          </button>
        </div>
      </div>
    </main>
  );
}

