// src/components/Cadastro.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cadastro: React.FC = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nomeCompleto, email, telefone, senha, confirmaSenha, cpfCnpj });
  };

  return (
    <div className="flex justify-center items-center h-screen relative bg-white">
      <Link to="/">
        <img
          src="../img/Logo-Portofixpng.png"
          alt="logo-portofix"
          className="w-[252px] absolute top-[44px] left-[26px] sm:w-[200px] sm:top-[20px] sm:left-[10px]"
        />
      </Link>
      <section className="bg-white rounded-lg border border-[#ddd] shadow-md p-8 w-full max-w-lg relative">
        <Link to="/" className="absolute top-4 left-4">
          <img src="volta.png" alt="botao-voltar" className="w-5" />
        </Link>
        <h1 className="text-2xl font-bold mb-2 text-center">Cadastro</h1>
        <h2 className="text-gray-600 mb-6 text-center text-base sm:text-sm">
          Preencha com seus dados corretamente para cadastrar-se.
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="Nome Completo"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="Seu melhor email"
            required
          />
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="Número de telefone"
            required
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="Senha"
            required
          />
          <input
            type="password"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="Confirme sua senha"
            required
          />
          <input
            type="text"
            value={cpfCnpj}
            onChange={(e) => setCpfCnpj(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="CPF ou CNPJ"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 flex justify-center items-center"
          >
            <img src="../img/submit.png" alt="submit-button" className="w-6" />
          </button>
        </form>
      </section>
    </div>
  );
}

export default Cadastro;
