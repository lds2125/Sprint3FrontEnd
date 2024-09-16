import React from 'react';
import mecanicoImagem from '../../assets/mecanico.png';

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[100vh] bg-gray-100 overflow-hidden">
      {/* Texto sobreposto à imagem */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center px-4">
        <h1 className="text-5xl font-bold text-white">Fazer um orçamento nunca foi tão fácil!</h1>
        <p className="text-2xl text-gray-200 mt-4">
          Descubra a inovação com o novo PortoFix! Agora, seus orçamentos são inteligentes e feitos em questão de minutos.
        </p>
      </div>

      {/* Wrapper das duas imagens */}
      <div className="w-full h-full flex overflow-hidden">
        {/* Primeira Imagem */}
        <img
          src={mecanicoImagem}
          alt="Mecânico trabalhando"
          className="w-1/2 h-full object-cover"
        />
        {/* Segunda Imagem */}
        <img
          src={mecanicoImagem}
          alt="Mecânico trabalhando"
          className="w-1/2 h-full object-cover"
        />
      </div>
    </section>
  );
}

const TelaPrincipal: React.FC = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default TelaPrincipal;
