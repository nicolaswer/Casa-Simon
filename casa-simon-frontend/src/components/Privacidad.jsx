import React from 'react';

export default function Privacidad() {
    // Estilos reutilizables
    const sectionTitle = "text-xl md:text-2xl font-bold text-yellow-400 mb-4 mt-8";
    const paragraph = "text-gray-400 text-sm md:text-base leading-relaxed mb-4";
    const listStyle = "list-disc pl-5 text-gray-400 space-y-2 mb-4 text-sm md:text-base";

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Título Principal */}
                <h1 className="text-3xl md:text-4xl font-bold mb-2 border-b border-yellow-500 pb-4">
                    Política de Privacidad
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Vigente desde: {new Date().getFullYear()}
                </p>

                <div className="bg-gray-900 p-6 md:p-10 rounded-xl shadow-lg border border-gray-800">
                    
                    <p className={paragraph}>
                        En <strong>Casa Simón</strong> respetamos tu privacidad. Esta política explica de forma sencilla cómo tratamos la información en nuestro sitio web.
                    </p>

                    {/* 1. QUÉ RECOPILAMOS */}
                    <h2 className={sectionTitle}>1. Uso de la información</h2>
                    <p className={paragraph}>
                        Nuestra web tiene como finalidad principal mostrar nuestra carta y facilitar el contacto. Solo recopilamos datos personales cuando tú nos los facilitas voluntariamente para:
                    </p>
                    <ul className={listStyle}>
                        <li>Gestionar una <strong>reserva</strong> (nombre, fecha y teléfono).</li>
                        <li>Preparar un <strong>pedido para llevar</strong>.</li>
                        <li>Responder a tus consultas a través de WhatsApp o correo electrónico.</li>
                    </ul>
                    <p className={paragraph}>
                        Estos datos se utilizan <strong>únicamente</strong> para prestarte el servicio solicitado. No creamos perfiles publicitarios ni vendemos tus datos a terceros.
                    </p>

                    {/* 2. COOKIES */}
                    <h2 className={sectionTitle}>2. Cookies y Navegación</h2>
                    <p className={paragraph}>
                        Este sitio web puede utilizar cookies propias o de terceros (como Google Analytics) para mejorar la experiencia de navegación y obtener estadísticas anónimas de visita. Al navegar por la web, aceptas el uso de estas cookies. Puedes desactivarlas en cualquier momento desde la configuración de tu navegador.
                    </p>

                    {/* 3. TERCEROS */}
                    <h2 className={sectionTitle}>3. Servicios de Terceros</h2>
                    <p className={paragraph}>
                        Para funcionalidades específicas, como la ubicación en mapas o el envío de reservas por WhatsApp, utilizamos servicios externos (Google Maps, WhatsApp API). El uso de estas herramientas se rige por sus propias políticas de privacidad.
                    </p>

                    {/* 4. TUS DERECHOS */}
                    <h2 className={sectionTitle}>4. Tus Derechos y Contacto</h2>
                    <p className={paragraph}>
                        Siempre eres dueño de tus datos. Si deseas consultar, modificar o eliminar cualquier información que nos hayas facilitado previamente, puedes hacerlo contactando con nosotros directamente a través de los medios disponibles en nuestra sección de contacto (teléfono o en el propio local).
                    </p>

                    <p className="text-yellow-500 text-sm font-semibold mt-6 pt-4 border-t border-gray-800">
                        Casa Simón se reserva el derecho a modificar esta política para adaptarla a novedades legislativas o cambios en el funcionamiento de la web.
                    </p>

                </div>
            </div>
        </div>
    );
}