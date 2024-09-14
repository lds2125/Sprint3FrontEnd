import React from 'react';

const SobreNos: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <section className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Sobre Nós</h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12">

          <div className="lg:w-1/2 text-center lg:text-left lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Quem Somos</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Somos a Portofix, uma empresa dedicada a oferecer soluções de alta qualidade no setor automotivo. Com uma equipe altamente qualificada e uma infraestrutura moderna, buscamos sempre a excelência no atendimento e na prestação de serviços.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Desde nossa fundação, temos como missão proporcionar um serviço ágil e eficiente, garantindo a satisfação total de nossos clientes. Nossos valores são baseados na transparência, compromisso e inovação.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Localizados em São Paulo - SP, atendemos a uma ampla gama de necessidades no mercado automotivo, sempre com um olhar atento às tendências e às melhores práticas do setor.
            </p>
          </div>


          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xs">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Sobre nós"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Nossa Visão</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Nossa visão é ser a empresa líder no setor automotivo, reconhecida pela qualidade dos serviços prestados e pelo excelente atendimento ao cliente. Buscamos inovar continuamente e nos adaptar às novas necessidades do mercado.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Acreditamos que nosso sucesso é construído com base na confiança e na satisfação de nossos clientes. Estamos comprometidos em manter os mais altos padrões de qualidade e integridade em tudo o que fazemos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
