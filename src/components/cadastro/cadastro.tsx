import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cadastro: React.FC = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [cpfCnpjError, setCpfCnpjError] = useState('');
  const [telefoneError, setTelefoneError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha !== confirmaSenha) {
      setErrorMessage('As senhas não coincidem!');
      return;
    }
    if (!validarEmail(email)) {
      setErrorMessage('Email inválido!');
      return;
    }
    if (!validarCpfCnpj(cpfCnpj)) {
      setCpfCnpjError('CPF ou CNPJ inválido!');
      return;
    }
    if (!validarTelefone(telefone)) {
      setTelefoneError('Telefone inválido!');
      return;
    }
    
    console.log({ nomeCompleto, email, telefone, senha, confirmaSenha, cpfCnpj });
    setErrorMessage('');
    setCpfCnpjError('');
    setTelefoneError('');
    setSuccessMessage('Cadastro realizado com sucesso!');
  };

  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarCpfCnpj = (cpfCnpj: string) => {
    const regex = /(^\d{11}$)|(^\d{14}$)/;
    return regex.test(cpfCnpj);
  };

  const validarTelefone = (telefone: string) => {
    const regex = /^\d{10,11}$/;
    return regex.test(telefone);
  };

  return (
    <div className="flex justify-center items-center h-screen relative bg-white">
      <Link to="/">
        <img
          src="../img/Portofixpng.png"
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
            className={`w-full p-2 border border-gray-300 rounded text-sm ${!validarEmail(email) && email ? 'border-red-500' : ''}`}
            placeholder="Seu melhor email"
            required
          />
          {errorMessage && !validarEmail(email) && <p className="text-red-500 text-sm">{errorMessage}</p>}
          
          <input
            type="tel"
            value={telefone}
            onChange={(e) => {
              setTelefone(e.target.value.replace(/\D/g, '')); // Remove letras e caracteres não numéricos
              setTelefoneError('');
            }}
            className={`w-full p-2 border border-gray-300 rounded text-sm ${telefoneError ? 'border-red-500' : ''}`}
            placeholder="Número de telefone (somente números)"
            required
          />
          {telefoneError && <p className="text-red-500 text-sm">{telefoneError}</p>}
          
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded text-sm ${senha !== confirmaSenha && confirmaSenha ? 'border-red-500' : ''}`}
            placeholder="Senha"
            required
          />
          <input
            type="password"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded text-sm ${senha !== confirmaSenha && confirmaSenha ? 'border-red-500' : ''}`}
            placeholder="Confirme sua senha"
            required
          />
          {senha !== confirmaSenha && confirmaSenha && <p className="text-red-500 text-sm">As senhas não coincidem!</p>}
          
          <input
            type="text"
            value={cpfCnpj}
            onChange={(e) => {
              setCpfCnpj(e.target.value.replace(/\D/g, ''));
              setCpfCnpjError('');
            }}
            className={`w-full p-2 border border-gray-300 rounded text-sm ${cpfCnpjError ? 'border-red-500' : ''}`}
            placeholder="CPF ou CNPJ (somente números)"
          />
          {cpfCnpjError && <p className="text-red-500 text-sm">{cpfCnpjError}</p>}
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 flex justify-center items-center"
          >
            <img src="../img/submit.png" alt="submit-button" className="w-6" />
          </button>
        </form>
        {successMessage && (
          <p className="text-green-500 text-sm mt-2 text-center">{successMessage}</p>
        )}
      </section>
    </div>
  );
};

export default Cadastro;
