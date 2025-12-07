import React from 'react';

function Header() {
  // Contenedor principal con fondo gris claro y borde
  return (
    <header className="bg-gray-200 border-b border-gray-300 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Lado Izquierdo: Logo y Nombre */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col text-gray-800 font-serif">
            {/* Logo placeholder */}
            <p className="text-xl font-bold leading-none text-orange-700">Logo</p>
            {/* Nombre del restaurante */}
            <p className="text-2xl font-bold leading-none">Casa Simón</p>
          </div>
        </div>

        {/* Lado Derecho: Navegación (Enlace a la Carta) */}
        <nav className="flex items-center space-x-8 text-gray-700 font-semibold tracking-wider">
          <a
            href="/carta" 
            className="text-lg hover:text-orange-700 transition duration-150 uppercase"
          >
            CARTA
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;