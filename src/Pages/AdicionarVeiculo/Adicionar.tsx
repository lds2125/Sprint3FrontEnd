import React, { useState } from 'react';

const AdicionarVeiculo = () => {
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [placa, setPlaca] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita o comportamento padrão de redirecionamento
    const novoVeiculo = { modelo, ano, cor, placa };

    try {
      const response = await fetch('http://localhost:8080/carros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoVeiculo),
      });

      if (response.ok) {
        setMensagem('Veículo adicionado com sucesso!');
        // Limpar campos do formulário se desejado
        setModelo('');
        setAno('');
        setCor('');
        setPlaca('');
      } else {
        setMensagem('Erro ao adicionar veículo.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setMensagem('Erro ao adicionar veículo.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Adicionar Veículo</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Cor"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
            Adicionar Veículo
          </button>
        </form>
        {mensagem && <p className="mt-4 text-center text-green-500">{mensagem}</p>} {/* Mensagem de sucesso ou erro */}
      </div>
    </div>
  );
};

export default AdicionarVeiculo;
