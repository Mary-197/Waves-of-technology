import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: 0,
    senha: "",
    confirmarSenha: "",
  });
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("");
    setLoading(true);

    // Validação dos campos
    if (!formData.nome || !formData.email || !formData.idade || !formData.senha || !formData.confirmarSenha) {
      setMensagem("❌ Preencha todos os campos.");
      setLoading(false);
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setMensagem("❌ As senhas não coincidem!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar. Servidor respondeu com código inválido.");
      }

      const data = await response.json();
      setMensagem(data.mensagem || "Erro ao cadastrar.");

      alert("✅ Cadastro realizado com sucesso!");
      navigate("/home");

    } catch (error) {
      if (error instanceof Error) {
        setMensagem(`❌ Erro de conexão: ${error.message}`);
      } else {
        setMensagem("❌ Erro desconhecido.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="number" name="idade" placeholder="Idade" onChange={handleChange} required min={1} />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
        <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? "Cadastrando..." : "Cadastrar"}</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default Cadastro;