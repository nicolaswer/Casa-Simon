import React from 'react';
import Logo from '../assets/LOGO.png';

function Header() {
  return (
    <header className="bg-black border-b border-yellow-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 text-white font-serif">
            <img 
              src={Logo} 
              alt="Logo Casa Simón" 
              className="w-16 h-16 object-contain"
            />

            <p className="text-2xl font-bold leading-none">Casa Simón</p>
          </div>
        </div>

        <nav className="flex items-center space-x-8 text-white font-semibold tracking-wider">
          <a
            href="/carta" 
            className="text-lg hover:text-yellow-400 transition duration-150 uppercase"
          >
            CARTA
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;