import React from 'react';

function aboutUsHomeSection() {
    const accentColor = "text-yellow-400";
    const elegantFont = "font-elegante";

    return (
        <section className="text-white mt-0 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <p className={`text-sm ${accentColor} ${elegantFont} font-light tracking-widest uppercase text-left mb-1`}>
                    Nuestra esencia
                </p>

                <h3 className={`text-4xl md:text-5xl ${elegantFont} font-light mb-8`}>
                    Cocina de origen, sin prisas.
                </h3>

                <p className={`text-base ${elegantFont} font-light text-gray-300 mb-12 leading-relaxed`}>
                    En Casa Simón, el lujo es el tiempo y el producto. Cocinamos a fuego lento, usando sarmientos para nuestras paellas y brasas de calidad para nuestras carnes.
                </p>

                <div className={`space-y-3 ${elegantFont} font-normal text-base`}>
                    
                    {/* Elemento 1 */}
                    <p className="flex items-center"> 
                        {/* CLASES AÑADIDAS: items-center en el <p> y relative/top-px en el <span> */}
                        <span className={`mr-3 ${accentColor} text-lg relative -top-px`}>★</span>
                        Calidad Gourmet en cada plato
                    </p>

                    {/* Elemento 2 */}
                    <p className="flex items-center">
                        <span className={`mr-3 ${accentColor} text-lg relative -top-px`}>★</span>
                        Arroces con D.O. Valencia
                    </p>

                    {/* Elemento 3 */}
                    <p className="flex items-center">
                        <span className={`mr-3 ${accentColor} text-lg relative -top-px`}>★</span>
                        Dos tiendas para estar cerca de ti
                    </p>
                </div>
            </div>
        </section>
    );
}

export default aboutUsHomeSection;