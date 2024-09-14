
import React from 'react';

const Contato: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <section className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Entre em Contato</h1>
        <div className="flex flex-col lg:flex-row justify-around items-center mb-8">

          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Informações de Contato</h2>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="mr-2 text-blue-600">📞</span> (11) 1234-5678
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="mr-2 text-blue-600">📧</span> contato@portofix.com.br
            </p>
            <p className="flex items-center text-gray-600">
              <span className="mr-2 text-blue-600">📍</span> Rua das Empresas, 123, São Paulo - SP
            </p>
          </div>

          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Envie uma Mensagem</h2>
            <form className="space-y-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Seu nome"
                required
              />
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Seu email"
                required
              />
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Sua mensagem"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
