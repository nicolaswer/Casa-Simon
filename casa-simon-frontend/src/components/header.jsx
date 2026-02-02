import React, { useState } from 'react'; // Importamos useState
import { Link } from 'react-router-dom'; 
import { APP_ROUTES } from '../config/routes';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { CalendarDays, Utensils, ChevronDown, X } from 'lucide-react'; // Importamos iconos extra

function Header() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-black sticky top-0 z-50 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 text-white font-serif text-2xl">
            <Link to={APP_ROUTES.HOME} className="text-white transition duration-150 font-bold z-50">
              Casa<span className="text-yellow-400"> Simón</span>
            </Link>
          </div>
        </div>

        <nav className="flex items-center">
          
          {/* --- VERSIÓN ESCRITORIO (md:flex) --- 
              Se oculta en móviles (hidden) y se muestra en pantallas medianas en adelante (md:flex)
          */}
          <div className="hidden md:flex items-center space-x-6 font-semibold tracking-wider">
            <Link to={APP_ROUTES.RESERVA_RESTAURANTE}
              className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2.5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all shadow-md active:scale-95"
            >
              <Utensils size={16} />
              Reservar Mesa
            </Link>

            <Link to={APP_ROUTES.RESERVA_PAELLA}
              className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2.5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all shadow-md active:scale-95"
            >
              <CalendarDays size={16} />
              Reservar Paella
            </Link>
          </div>

          {/* --- VERSIÓN MÓVIL (md:hidden) --- 
              Se muestra en móviles (flex) y se oculta en pantallas medianas en adelante (md:hidden)
          */}
          <div className="md:hidden relative ml-4">
            <button 
              onClick={toggleMobileMenu}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm font-bold uppercase tracking-widest text-[10px] transition-all shadow-md ${isMobileMenuOpen ? 'bg-stone-800 text-white border border-stone-600' : 'bg-yellow-500 text-black'}`}
            >
              {isMobileMenuOpen ? 'Cerrar' : 'Reservar Ahora'}
              {isMobileMenuOpen ? <X size={14} /> : <ChevronDown size={14} />}
            </button>

            {/* DROPDOWN (Menú desplegable) */}
            {isMobileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-stone-900 border border-yellow-500/30 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <Link 
                  to={APP_ROUTES.RESERVA_RESTAURANTE}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-4 text-xs font-bold text-white uppercase tracking-wider hover:bg-stone-800 border-b border-stone-800 transition-colors"
                >
                  <Utensils size={14} className="text-yellow-500" />
                  Mesa Restaurante
                </Link>
                
                <Link 
                  to={APP_ROUTES.RESERVA_PAELLA}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-4 text-xs font-bold text-white uppercase tracking-wider hover:bg-stone-800 transition-colors"
                >
                  <CalendarDays size={14} className="text-yellow-500" />
                  Paella Domicilio
                </Link>
              </div>
            )}
          </div>

          {/* REDES SOCIALES (Siempre visibles, ajustamos margen) */}
          <div className="flex items-center space-x-4 text-xl text-white ml-4 md:ml-12 border-l border-white/10 pl-4 md:pl-0 md:border-none"> 
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