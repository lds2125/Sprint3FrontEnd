import React from 'react';
import matheus from "../../assets/Foto.jpeg";
import joao from "../../assets/JOAO.jpg";
import luan from "../../assets/luan.png";

const SobreNos: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <section className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Sobre Nós</h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12">
          <div className="lg:w-1/2 text-center lg:text-left lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Quem Somos : </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A Portofix oferece soluções de alta qualidade no setor automotivo. Com uma equipe qualificada por estudantes da Faculdade de Informática e Administração Paulista, buscamos excelência no atendimento.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nossa missão é proporcionar um serviço ágil e eficiente, sempre com transparência e compromisso.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Localizados em São Paulo, atendemos as necessidades no mercado automotivo com inovação e boas práticas.
            </p>
            
          </div>

          <div className="lg:w-1/2 flex flex-wrap gap-4 justify-center">
            <div className="relative w-full max-w-xs">
              <img
                src= {matheus}
                alt="Matheus"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg"></div>
            </div>
            <div className="relative w-full max-w-xs">
              <img
                src={joao}
                alt="Joao"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg"></div>
            </div>
            <div className="relative w-full max-w-xs">
              <img
                src={luan}
                alt="Luan"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Nossa Visão</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Visamos ser líderes no setor automotivo, reconhecidos pela qualidade dos nossos serviços e atendimento.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Buscamos inovar e adaptar às novas necessidades do mercado, mantendo altos padrões de qualidade e integridade.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
