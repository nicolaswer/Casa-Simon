import React from 'react';

function Footer() {
    // Definición de clases de estilo
    const accentColor = "text-yellow-400"; // Aunque el texto es blanco, mantenemos la coherencia del estilo

    return (
        // Footer con fondo negro y un poco de padding vertical para centrar el texto
        <footer className="bg-black text-white py-4 border-t border-gray-800 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                <p className="text-sm font-light text-gray-400">
                    {/* Nombre del restaurante en color de acento o blanco */}
                    <span className="text-white">Casa Simón</span> 
                    
                    {/* Separador sutil y Copyright */}
                    <span className="mx-2 text-gray-600">|</span> 
                    
                    &copy; 2025 TODOS LOS DERECHOS RESERVADOS
                </p>

            </div>
        </footer>
    );
}

export default Footer;