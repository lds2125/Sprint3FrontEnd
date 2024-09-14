import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-2 text-center relative bottom-0 left-0 w-full">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} PortoFix. Todos os direitos reservados.
      </p>
      <p className="text-xs text-gray-300">
        Construído com 💙 por PortoFix.
      </p>
    </footer>
  );
};

export default Footer;
