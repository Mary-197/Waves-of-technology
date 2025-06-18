import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
    senha: "",
    confirmarSenha: "",
  });
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.idade || !formData.senha || !formData.confirmarSenha) {
      setMensagem("❌ Preencha todos os campos.");
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setMensagem("❌ As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3002/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMensagem(data.mensagem || "Erro ao cadastrar.");

      if (response.ok) {
        alert("✅ Cadastro realizado com sucesso!");
        navigate("/home");
      }
    } catch (error) {
      setMensagem("❌ Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="number" name="idade" placeholder="Idade" onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
        <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default Cadastro;
