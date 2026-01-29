import React from 'react';

export default function AvisoLegal() {
    // Estilos reutilizables
    const sectionTitle = "text-xl md:text-2xl font-bold text-yellow-400 mb-4 mt-8";
    const paragraph = "text-gray-400 text-sm md:text-base leading-relaxed mb-4";
    
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Título Principal */}
                <h1 className="text-3xl md:text-4xl font-bold mb-2 border-b border-yellow-500 pb-4">
                    Aviso Legal
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Vigente desde: {new Date().getFullYear()}
                </p>

                <div className="bg-gray-900 p-6 md:p-10 rounded-xl shadow-lg border border-gray-800">
                    
                    {/* 1. TITULARIDAD */}
                    <h2 className={sectionTitle}>1. Titularidad del sitio web</h2>
                    <p className={paragraph}>
                        El presente aviso legal regula el uso del sitio web de <strong>Casa Simón</strong>. El objetivo de este sitio es ofrecer información sobre nuestros restaurantes, mostrar nuestra oferta gastronómica y facilitar la gestión de reservas y pedidos.
                    </p>
                    <p className={paragraph}>
                        Para cualquier comunicación directa, puedes contactar con nosotros a través de los teléfonos y direcciones físicas indicadas en la sección de "Contacto" de esta misma web, o bien en el propio establecimiento.
                    </p>

                    {/* 2. PROPIEDAD INTELECTUAL */}
                    <h2 className={sectionTitle}>2. Propiedad Intelectual (Fotos y Carta)</h2>
                    <p className={paragraph}>
                        Todos los contenidos de esta web (incluyendo, sin limitación, el diseño gráfico, las imágenes de nuestros platos, los textos de la carta, logotipos y código fuente) son propiedad exclusiva de Casa Simón o disponemos de las licencias necesarias para su uso.
                    </p>
                    <p className={paragraph}>
                        Queda prohibida la reproducción, distribución o modificación de estos contenidos con fines comerciales sin nuestra autorización previa. Si te gustan nuestras fotos, ¡pídenos permiso antes de usarlas!
                    </p>

                    {/* 3. CONTENIDOS Y PRECIOS */}
                    <h2 className={sectionTitle}>3. Exactitud de la información</h2>
                    <p className={paragraph}>
                        En Casa Simón nos esforzamos para que la información de la web (precios, menús y horarios) esté siempre actualizada. Sin embargo, pueden existir errores puntuales o desactualizaciones. 
                    </p>
                    <p className={paragraph}>
                        En caso de discrepancia entre los precios mostrados en la web y los precios vigentes en el restaurante, prevalecerán siempre los precios indicados físicamente en el local o confirmados por nuestro personal en el momento de la reserva.
                    </p>

                    {/* 4. ENLACES */}
                    <h2 className={sectionTitle}>4. Enlaces a terceros</h2>
                    <p className={paragraph}>
                        Esta web puede contener enlaces a sitios externos (como la ubicación en Google Maps o perfiles de Redes Sociales). Casa Simón no asume responsabilidad alguna por el contenido o las políticas de privacidad de dichos sitios web ajenos.
                    </p>

                    {/* 5. LEY APLICABLE */}
                    <h2 className={sectionTitle}>5. Legislación aplicable</h2>
                    <p className={paragraph}>
                        El uso de este sitio web se rige por la legislación española. Para la resolución de cualquier conflicto que pudiera derivarse del acceso a la página web, el usuario y Casa Simón acuerdan someterse expresamente a los juzgados y tribunales competentes de la ciudad de Elche (Alicante).
                    </p>

                </div>
            </div>
        </div>
    );
}