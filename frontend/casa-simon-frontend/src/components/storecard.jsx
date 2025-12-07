import React from 'react';
import { APP_ROUTES } from '../config/routes'; 

/**
 * Componente Tarjeta de Tienda (StoreCard)
 * Muestra la información de contacto y acción de una ubicación específica.
 * @param {object} props
 * @param {string} props.title - Título de la tienda (ej: "Tienda Centro")
 * @param {string} props.specialty - Breve descripción o especialidad.
 * @param {string} props.address - Dirección completa de la tienda.
 * @param {string} props.phone - Número de teléfono.
 * @param {string} props.mapLink - URL de Google Maps para esta ubicación.
 */
function StoreCard({ title, specialty, address, phone, mapLink }) {
  const cardBg = "bg-gray-800"; 
  const accentColor = "text-yellow-400";

  return (
    <div className={`inline-block ${cardBg} p-8 rounded-lg shadow-2xl text-left w-lg`}>
      
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

        <div className="flex space-x-4 pt-6">

          <a 
            href={mapLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-bold border border-white hover:bg-white hover:text-black transition duration-300"
          >
            VER MAPA
          </a>

          <a 
            href={`tel:${phone}`} 
            className="px-5 py-2 text-sm font-bold bg-yellow-700 text-black hover:bg-yellow-600 transition duration-300"
          >
            LLAMAR
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default StoreCard;