import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

      {/* Botão de menu para telas pequenas */}
      <div className="lg:hidden flex justify-end w-full">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Links de navegação (desktop e mobile) */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex lg:space-x-4 mx-auto">
          <Link
            to="/sobre-nos"
            className="block lg:inline-block text-white hover:text-gray-300 transition-colors duration-300 ease-in-out py-2"
          >
            Sobre nós
          </Link>
          <Link
            to="/contato"
            className="block lg:inline-block text-white hover:text-gray-300 transition-colors duration-300 ease-in-out py-2"
          >
            Contato
          </Link>
        </div>

        {/* Botões à direita */}
        <div className="lg:flex lg:space-x-4 mt-4 lg:mt-0 lg:ml-8">
          <Link
            to="/cadastro"
            className="block lg:inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-white hover:text-blue-700 transition-colors duration-300 ease-in-out"
          >
            Cadastre-se
          </Link>
          <Link
            to="/cliente-porto"
            className="block lg:inline-block bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in-out"
          >
            Já sou cliente Porto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
