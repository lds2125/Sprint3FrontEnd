import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JaSouClientePorto: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Login bem-sucedido');
    navigate('/conta-usuario');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white rounded-lg border border-gray-300 shadow-md p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-blue-700 ">Login Cliente Porto</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Sua senha"
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default JaSouClientePorto;
