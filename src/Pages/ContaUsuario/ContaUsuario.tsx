import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Define as interfaces para os tipos de dados da API
interface Carro {
  ano: number;
  cor: string;
  idCarro: number;
  idCliente: number; 
  modelo: string;
  placa: string;
}

interface Diagnostico {
  idDiagnostico: number;
  dataHoraDiagnostico: string; 
  resultado: string;
  detalhes: string;
  veiculoIdVeiculo: number;
}

const ContaUsuario = () => {
  const [carro, setCarro] = useState<Carro | null>(null);
  const [diagnosticos, setDiagnosticos] = useState<Diagnostico[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarro = async () => {
      try {
        const response = await fetch('http://localhost:8080/carros/1'); 
        if (response.ok) {
          const data: Carro = await response.json();
          setCarro(data);
          fetchDiagnosticos(data.idCarro);
        } else if (response.status === 404) {
          setCarro(null);
        } else {
          console.error('Erro ao buscar dados do carro:', response.status);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do carro:', error);
      }
    };

    fetchCarro();
  }, []);

  const fetchDiagnosticos = async (idVeiculo: number) => {
    try {
      const response = await fetch(`http://localhost:8080/diagnosticos/${idVeiculo}`);
      if (response.ok) {
        const data: Diagnostico[] = await response.json();
        setDiagnosticos(data);
      } else {
        console.error('Erro ao buscar diagnósticos:', response.status);
      }
    } catch (error) {
      console.error('Erro ao buscar diagnósticos:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">BEM VINDO</h1>
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl mt-10">
        <div className="col-span-1 bg-white rounded-lg p-6 shadow-md border-4 border-transparent hover:border-blue-700 transition-all duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Modelo do carro:</h2>
          {carro ? (
            <p className="text-black">{carro.modelo}</p>
          ) : (
            <p className="text-black">SEM VEÍCULOS</p>
          )}
          <button
            onClick={() => navigate('/adicionar-veiculo')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            ADICIONAR VEÍCULO
          </button>
          <button
            onClick={() => navigate("/listar-veiculos")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            LISTAR VEÍCULOS
          </button>
          <h2 className="text-xl font-bold mt-6 mb-4 text-blue-700">Diagnósticos recentes:</h2>
          <ul className="list-disc ml-5 text-black">
            {diagnosticos.length > 0 ? (
              diagnosticos.map((diagnostico) => (
                <li key={diagnostico.idDiagnostico}>
                  {`${diagnostico.resultado} - ${diagnostico.detalhes} (${diagnostico.dataHoraDiagnostico})`}
                </li>
              ))
            ) : (
              <li>Nenhum diagnóstico encontrado</li>
            )}
          </ul>
        </div>

        {/* Mapa da seguradora */}
        <div className="col-span-2 bg-white rounded-lg p-6 shadow-md border-4 border-transparent hover:border-blue-700 transition-all duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-8 text-blue-700">Seguradora Porto mais próxima 👨‍🔧</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContaUsuario;
