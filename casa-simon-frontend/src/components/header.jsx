import React from 'react';
import { Link } from 'react-router-dom'; 
import { APP_ROUTES } from '../config/routes';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { CalendarDays, Utensils } from 'lucide-react';

function Header() {
  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 text-white font-serif text-2xl">
            <Link to={APP_ROUTES.HOME} className="text-white transition duration-150 font-bold">
              Casa<span className="text-yellow-400"> Simón</span>
            </Link>
          </div>
        </div>

        <nav className="flex items-center space-x-6 md:space-x-12 text-white font-semibold tracking-wider">
          <Link to={APP_ROUTES.RESERVA_RESTAURANTE}
            className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2.5 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-yellow-400 transition-all shadow-md active:scale-95"
          >
            <Utensils size={16} />
            Reservar Mesa
          </Link>

          <Link to={APP_ROUTES.RESERVA_PAELLA}
            className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2.5 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-yellow-400 transition-all shadow-md active:scale-95"
          >
            <CalendarDays size={16} />
            Reservar Paella
          </Link>

          <div className="flex items-center space-x-4 text-xl"> 
            <a href={APP_ROUTES.FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-150"><FaFacebookF /></a>
            <a href={APP_ROUTES.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-150"><FaInstagram /></a>
          </div>
        </nav>
      </div>
      <div className="h-px bg-white/20 w-full"></div>
    </header>
  );
}

export default Header;