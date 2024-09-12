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
      <div className="flex space-x-4">
        <Link to="/sobre-nos" className="text-white hover:text-gray-300">
          Sobre nós
        </Link>
        <Link to="/contato" className="text-white hover:text-gray-300">
          Contato
        </Link>
      </div>
      <div className="flex space-x-2">
        <Link
          to="/cadastro"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Cadastre-se
        </Link>
        <Link
          to="/cliente-porto"
          className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-200"
        >
          Já sou cliente Porto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;