const ContaUsuario = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl mt-10">
        {/* Dados do usuário */}
        
        <div className="col-span-1 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Modelo do carro:</h2>
          <p className="text-black">Jeep Compass 2023 Branco</p>
          <br />
          <h2 className="text-xl font-bold mt-6 mb-4 text-blue-700">Nome completo:</h2>
          <p className="text-black">José Fernando da Silva Torres</p>
          <br />
          <h2 className="text-xl font-bold mt-6 mb-4 text-blue-700">Notificações recentes:</h2>
          <ul className="list-disc ml-5 text-black">
            <li>Falta de combustível</li>
            <br />
            <li>Freio de mão está acionado</li>
            <br />
            <li>Pneu precisa ser calibrado</li>
            <br />
          </ul>
        </div>

        {/* Mapa com iframe */}
        <div className="col-span-2 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-8 text-blue-700">Seguradora Porto mais próxima 👨‍🔧 </h2>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-46.57421%2C-23.68153%2C-46.57421%2C-23.68153&layer=mapnik&marker=-23.68153%2C-46.57421"
            style={{ border: 0, width: '100%', height: '400px' }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContaUsuario;
