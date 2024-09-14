import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="../assets/portofix-logo.png" 
          alt="PortoFix logo"
          className="w-10 h-10"
        />
        <Link to="/" className="text-white text-2xl font-bold ml-2">
          Porto<span className="text-black">Fix</span>
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
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all duration-300 ease-in-out"
        >
          Cadastre-se
        </Link>
        <Link
          to="/cliente-porto"
          className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300 ease-in-out"
        >
          Já sou cliente Porto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
