import React from 'react';
import mecanicoImagem from '../../assets/mecanico.png';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Fazer um orçamento nunca foi tão fácil!</h1>
      <p className="text-lg text-gray-600">Descubra a inovação com o novo PortoFix! Agora, seus orçamentos são inteligentes e feitos em questão de minutos.</p>
      <img src={mecanicoImagem} alt="Descrição da imagem" className="w-full h-3/4 object-cover mt-4" /> {/* Imagem adicionada */}
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
