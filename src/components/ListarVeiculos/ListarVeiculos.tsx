import React, { useEffect, useState } from 'react';

interface Carro {
  idCarro: number;
  placa: string;
  modelo: string;
  ano: number;
  cor: string;
  idCliente: number;
}

const ListarVeiculos: React.FC = () => {
  const [carros, setCarros] = useState<Carro[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarros = async () => {
      try {
        const response = await fetch('http://localhost:8080/carros');
        if (response.ok) {
          const data = await response.json();
          setCarros(data); // Armazena os carros na state
        } else {
          console.error('Erro ao buscar veículos:', response.status);
          setError('Erro ao buscar veículos. Tente novamente mais tarde.');
        }
      } catch (error) {
        console.error('Erro ao buscar veículos:', error);
        setError('Erro ao buscar veículos. Verifique a conexão.');
      }
    };

    fetchCarros();
  }, []);

  const excluirVeiculo = async (idCarro: number) => {
    try {
      const response = await fetch(`http://localhost:8080/carros/${idCarro}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCarros(carros.filter((carro) => carro.idCarro !== idCarro));
        alert("Veículo excluído com sucesso!");
      } else {
        console.error('Erro ao excluir veículo:', response.status);
        alert("Erro ao excluir veículo.");
      }
    } catch (error) {
      console.error('Erro ao excluir veículo:', error);
      alert("Erro ao excluir veículo.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Lista de Veículos</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {carros.length > 0 ? (
          carros.map((carro) => (
            <div key={carro.idCarro} className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200 text-black">
              <p><strong>ID:</strong> {carro.idCarro}</p>
              <p><strong>Placa:</strong> {carro.placa}</p>
              <p><strong>Modelo:</strong> {carro.modelo}</p>
              <p><strong>Ano:</strong> {carro.ano}</p>
              <p><strong>Cor:</strong> {carro.cor}</p>
              <p><strong>ID do Cliente:</strong> {carro.idCliente}</p>
              <button
                onClick={() => excluirVeiculo(carro.idCarro)}
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Excluir Veículo
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Nenhum veículo encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default ListarVeiculos;
