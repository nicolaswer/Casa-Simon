import React from 'react';
import Logo from '../assets/LOGO.png';
import { APP_ROUTES } from '../config/routes';

function Mainimagesection() {
  const restauranteNombre = "Casa Simón";
  const HomeFrontImgPath = "/HomeImg/HomeFrontImage.jpg"; 

  return (
    <section 
      className="relative w-full h-[700px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${HomeFrontImgPath})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-20 flex flex-col items-center">
          <img
            src={Logo} 
            alt="Logo del Restaurante" 
            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg opacity-50"
          />
        
        <h2 className="text-6xl font-extrabold tracking-wide drop-shadow-lg opacity-90 mb-8">
          {restauranteNombre}
        </h2>

        <div className="flex space-x-6">
          <a
            href={APP_ROUTES.CARTA}
            className="px-6 py-3 text-lg font-semibold uppercase tracking-wider 
                       bg-white text-black rounded-lg shadow-xl 
                       hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Ver Carta
          </a>
        </div>

      </div>
    </section>
  );
}

export default Mainimagesection;