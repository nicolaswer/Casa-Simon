import React from 'react';
import { APP_ROUTES } from '../config/routes'; 

function StoreCard({ title, specialty, address, phone, mapLink }) {
  const cardBg = "bg-black"; 
  const accentColor = "text-yellow-400";

  return (
    // CLASES CORREGIDAS PARA ANCHURA Y CENTRADO: 
    // Se elimina w-full. max-w-sm limita el ancho en todas las pantallas. mx-auto lo centra.
    <div className={`max-w-sm mx-auto block ${cardBg} p-8 rounded-lg shadow-2xl text-left`}>
      
      <div className="space-y-4">
        <h3 className="text-3xl font-serif font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-400 text-base">
          {specialty}
        </p>
        <div className="pt-4 space-y-3">

          <div className="flex items-center space-x-3">
            <span className={`${accentColor}`}>📍</span> 
            <div className="text-sm">
              <p className="font-bold text-white uppercase">Dirección</p>
              <p className="text-gray-300">{address}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className={`${accentColor}`}>📞</span> 
            <div className="text-sm">
              <p className="font-bold text-white uppercase">Teléfono</p>
              <p className="text-gray-300">{phone}</p>
            </div>
          </div>
        </div>

        {/* Los botones se apilan en móvil y llenan el ancho de la tarjeta */}
        <div className="flex flex-col space-y-2 pt-6 sm:flex-row sm:space-x-4 sm:space-y-0">

          <a 
            href={mapLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-5 py-2 text-sm font-bold border border-white hover:bg-white hover:text-black transition duration-300"
          >
            VER MAPA
          </a>

          <a 
            href={`tel:${phone}`} 
            className="w-full text-center px-5 py-2 text-sm font-bold bg-yellow-300 text-black hover:bg-yellow-600 transition duration-300"
          >
            LLAMAR
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default StoreCard;