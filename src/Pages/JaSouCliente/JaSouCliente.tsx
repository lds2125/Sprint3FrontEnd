import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro: React.FC = () => {
  const navigate = useNavigate();

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

    // Redireciona para a página "JaSouCliente"
    navigate('/jaSouCliente');
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
      <section className="bg-white rounded-lg border border-[#ddd] shadow-md p-8 w-full max-w-lg relative">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Cadastro:</h1>
        <h2 className="text-2xl font-bold mb-4 text-black">
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
              setTelefone(e.target.value.replace(/\D/g, ''));
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
            Cadastrar
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
