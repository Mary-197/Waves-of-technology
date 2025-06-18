// src/pages/Perfil/Perfil-edicao.tsx
import React, { useState } from 'react';

export default function EditarPerfil() {
  const [nome, setNome] = useState('João da Silva');
  const [inputNome, setInputNome] = useState(nome);

  function confirmarNome() {
    if (inputNome === nome) return;

    const confirmacao = window.confirm('Tem certeza que deseja alterar seu nome social?');
    if (confirmacao) {
      setNome(inputNome);
      alert('Nome atualizado com sucesso!');
    } else {
      setInputNome(nome);
    }
  }

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logos">
            <img src="/img/Logo1.png" alt="Logo 1" className="logo" />
            <img src="/img/Logo2.png" alt="Logo 2" className="logo" />
          </div>
          <i className="bi bi-person-circle perfil-icon"></i>
        </div>
      </header>

      <main className="perfil-container">
        <h2>Editar Perfil</h2>
        <div className="form-grid">
          <div className="input-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label htmlFor="nome">Nome do usuário</label>
            <input
              type="text"
              id="nome"
              value={inputNome}
              onChange={(e) => setInputNome(e.target.value)}
              style={{ flexGrow: 1 }}
            />
            <button type="button" onClick={confirmarNome}>
              Salvar
            </button>
          </div>

          <div className="input-group">
            <label>Porcentagem</label>
            <input type="text" value="85%" disabled />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="text" value="joao@email.com" disabled />
          </div>
          <div className="input-group senha">
            <label>Nova Senha</label>
            <input type="password" placeholder="Digite nova senha" />
          </div>
        </div>
      </main>
    </>
  );
}
