import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link en lugar de <a> para velocidad
import { APP_ROUTES } from '../config/routes';
import { Utensils, ShoppingBag } from 'lucide-react'; // Iconos para reforzar visualmente

function MainHomeSection() {
    const backgroundUrl = "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=2070&auto=format&fit=crop"; 

    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            
            {/* Fondo y Overlay */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundUrl})` }} />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

            <div className="relative z-20 flex flex-col items-center max-w-5xl text-center px-4">
                
                <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-wide drop-shadow-xl mb-6 text-white">
                    Maestros del <span className="text-yellow-400 italic">Fuego</span>
                </h2>
        
                <p className="text-xl md:text-2xl text-gray-200 font-light mb-10 max-w-2xl mx-auto drop-shadow-md">
                    Dos formas de disfrutar de la auténtica cocina ilicitana.
                </p>
                
                {/* --- AQUÍ ESTÁ EL CAMBIO --- */}
                <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                    
                    {/* Opción 1: RESTAURANTE (Estilo Principal - Dorado) */}
                    <Link
                        to={APP_ROUTES.CARTA_RESTAURANTE}
                        className="group relative px-10 py-4 border border-yellow-500/50 bg-black/40 backdrop-blur-sm
                                text-yellow-400 font-serif font-bold text-xl uppercase tracking-[0.2em]
                                hover:bg-yellow-400 hover:text-black hover:border-yellow-400
                                transition-all duration-500 ease-out text-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    >
                        <span className="relative z-10">Carta Sala</span>
                        {/* Efecto de luz al hacer hover */}
                        <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                        
                    {/* OPCIÓN 2: PARA LLEVAR (La opción Funcional) */}
                    {/* Estilo: Texto Blanco, Borde Blanco Fino, Limpio */}
                    <Link
                        to={APP_ROUTES.CARTA_LLEVAR}
                        className="px-10 py-4 border border-white/30 bg-white/5 backdrop-blur-sm
                                text-white font-sans font-light text-sm uppercase tracking-[0.2em]
                                hover:bg-white hover:text-black hover:border-white
                                transition-all duration-300 ease-out text-center"
                    >
                        Para Llevar
                    </Link>
                </div>
                {/* --------------------------- */}
                
            </div>
        </section>
    );
}
export default MainHomeSection;