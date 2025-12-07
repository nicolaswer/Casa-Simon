import React from 'react';
import StoreCard from './storecard';
import { APP_ROUTES } from '../config/routes';

function Footer() {
  const footerBg = "bg-gray-900";
  const primaryText = "text-white";
  const accentColor = "text-yellow-400";

  return (
    <footer className={`${footerBg} ${primaryText} mt-12 py-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className={`text-lg font-serif ${accentColor} tracking-widest mb-2 uppercase`}>
          COMIDA CASERA DIARIA
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          Nuestras tiendas
        </h2>

        <div className="flex flex-col justify-center gap-8 items-center">
            
            <StoreCard 
                title="Restaurante Casa Simón"
                specialty="Especialidad en arroces, pollos asados y tapas frías."
                address="C/ Partida Altabix, 160, Elx, Alicante"
                phone={APP_ROUTES.MAIN_RESTAURANT_PHONE}
                mapLink={APP_ROUTES.MAIN_RESTAURANT}
            />

            <StoreCard 
                title="Casa Simon Comidas Para Llevar"
                specialty="Menú diario y paellas para llevar."
                address="C/ Benicassim, 2, Elx, Alicante"
                phone={APP_ROUTES.LOCAL1_PHONE}
                mapLink={APP_ROUTES.LOCAL1}
            />

        </div>
        
      </div>
    </footer>
  );
}

export default Footer;