import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/PortoFix.png" 
            alt="PortoFix logo"
            className="w-10 h-10"
          />
          <span className="text-white text-2xl font-bold ml-2 hover:underline">
            Porto<span className="text-black">Fix</span>
          </span>
        </Link>
      </div>
      
      <div className="flex space-x-8 ml-auto">
        <Link 
          to="/sobre-nos" 
          className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
        >
          Sobre nós
        </Link>
        <Link 
          to="/contato" 
          className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
        >
          Contato
        </Link>
      </div>

      {/* Botões à direita */}
      <div className="flex space-x-2 ml-auto">
        <Link
          to="/cadastro"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-white hover:text-blue-700 transition-colors duration-300 ease-in-out"
        >
          Cadastre-se
        </Link>
        <Link
          to="/cliente-porto"
          className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in-out"
        >
          Já sou cliente Porto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
