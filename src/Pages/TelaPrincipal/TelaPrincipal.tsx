import React from 'react';
import mecanicoImagem from '../../assets/mecanico.png';

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Texto sobreposto à imagem */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center px-4">
        <h1 className="text-7xl font-bold text-white">Fazer um orçamento nunca foi tão fácil!</h1>
        <p className="text-3xl text-gray-200 mt-25">
          Descubra a inovação com o novo PortoFix! Agora, seus orçamentos são inteligentes e feitos em questão de minutos.
        </p>
      </div>

      {/* Imagem de fundo */}
      <img
        src={mecanicoImagem}
        alt="Descrição da imagem"
        className="w-full h-full object-cover"
      />
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
