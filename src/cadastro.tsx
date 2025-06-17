import { useState } from 'react';
import axios from 'axios';

export default function Cadastro() {
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/usuarios', form);
      alert('Usuário cadastrado com sucesso!');
    } catch (err) {
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="senha" placeholder="Senha" type="password" onChange={handleChange} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
