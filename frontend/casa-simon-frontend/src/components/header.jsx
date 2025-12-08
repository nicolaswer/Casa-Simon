import React from 'react';
import { APP_ROUTES } from '../config/routes';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 text-white font-serif text-2xl">
            <a
              href={APP_ROUTES.HOME}
              className=" text-white transition duration-150 font-bold"
            >
            Casa
              <span className="text-yellow-400"> Simón</span>
            </a>
          </div>
        </div>

        <nav className="flex items-center space-x-12 text-white font-semibold tracking-wider">
          <a
            href={APP_ROUTES.CARTA}
            className="text-lg hover:text-yellow-400 transition duration-150 uppercase"
          >
            CARTA
          </a>
          <div className="flex items-center space-x-3 text-xl"> 
            <a 
                href={APP_ROUTES.FACEBOOK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition duration-150"
            >
                <FaFacebookF />
            </a>
            <a 
                href={APP_ROUTES.INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition duration-150"
            >
                <FaInstagram />
            </a>
        </div>
        </nav>
      </div>
      <div className="h-px bg-white w-full"></div>
    </header>
  );
}

export default Header;