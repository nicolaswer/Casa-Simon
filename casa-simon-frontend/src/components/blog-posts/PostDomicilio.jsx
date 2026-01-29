import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../config/routes';

export default function PostDomicilio() {
    
    // FOTO PRINCIPAL: Una paella espectacular que invite a pedirla
const heroImage = "/BlogImg/PaellaDomicilio.webp";
    // DATOS ESTRUCTURADOS (JSON-LD) PARA GOOGLE
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Paellas a Domicilio en Elche: Sin gastos de envío",
        "image": heroImage, 
        "author": {
            "@type": "Organization",
            "name": "Casa Simón"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Casa Simón",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.casasimonelche.es/Logo/android-chrome-512x512.png" 
            }
        },
        "datePublished": "2025-01-15",
        "description": "¿Quieres disfrutar del auténtico arroz a la leña en tu casa? En Casa Simón te llevamos la paella a domicilio en toda Elche GRATIS. Recién hecha."
    };

    return (
        <>
            {/* --- SEO ON-PAGE --- */}
            <Helmet>
                <title>Paellas a Domicilio en Elche (Envío GRATIS) | Casa Simón</title>
                <meta name="description" content="Encarga tu paella a domicilio en Elche. Arroces a la leña recién hechos llevados a tu mesa sin costes de envío extra. También opción para recoger." />
                <meta name="keywords" content="paella a domicilio elche, arroz a domicilio elche, pedir paella elche, comida a domicilio sin gastos envio elche" />
                
                {/* Open Graph */}
                <meta property="og:title" content="Tu Paella a la Leña en casa, sin pagar el envío." />
                <meta property="og:description" content="Olvídate de cocinar. Te llevamos el auténtico sabor de Casa Simón a tu puerta en Elche." />
                <meta property="og:image" content={heroImage} />
                <meta property="og:type" content="article" />
                
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            {/* --- CONTENIDO DEL ARTÍCULO --- */}
            <article className="min-h-screen bg-black text-white pt-24 pb-12">
                
                {/* HERO IMAGE */}
                <div className="w-full h-[50vh] relative mb-12 group">
                    <img 
                        src={heroImage} 
                        alt="Paella mixta recién hecha lista para servir a domicilio en Elche" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-10 left-0 right-0 px-4 text-center z-20">
                        <span className="bg-green-600 text-white font-bold px-3 py-1 rounded uppercase text-xs tracking-widest mb-3 inline-block">
                            Servicio a Domicilio
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                            El auténtico Arroz a la Leña, ahora <span className="text-yellow-400">en la puerta de tu casa</span>
                        </h1>
                        <p className="text-xl mt-4 font-medium text-gray-200">
                            Reparto en toda Elche. <span className="text-yellow-400 font-bold bg-black/50 px-2">SIN GASTOS DE ENVÍO.</span>
                        </p>
                    </div>

                    {/* DISCLAIMER FOTO 1 */}
                    <div className="absolute bottom-3 right-4 z-20 pointer-events-none">
                        <span className="text-[10px] text-white/60 uppercase tracking-widest font-light backdrop-blur-sm bg-black/10 px-2 py-1 rounded">
                            Sugerencia de presentación
                        </span>
                    </div>
                </div>

                {/* CUERPO DEL ARTÍCULO */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed text-lg">
                    
                    <p className="mb-8 first-letter:text-5xl first-letter:text-yellow-400 first-letter:font-bold first-letter:float-left first-letter:mr-3">
                        Hay días en los que el cuerpo te pide un buen arroz, pero no te apetece salir de casa, ni arreglarte, ni coger el coche. Lo entendemos perfectamente. Por eso, en <strong>Casa Simón</strong> hemos decidido que si tú no vienes a la leña, la leña va a ti.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-yellow-500 pl-4">
                        La misma calidad, pero en tu salón
                    </h2>
                    <p className="mb-6">
                        Muchos clientes nos preguntan: <em>"¿Pero está igual de buena que en el restaurante?"</em>. La respuesta es rotunda: <strong>SÍ</strong>.
                    </p>
                    <p className="mb-6">
                        Tu paella no se cocina horas antes. Se empieza a preparar al fuego vivo de los sarmientos cuando confirmamos tu pedido, calculando los tiempos de reparto para que llegue a tu mesa en el punto exacto: caliente, con el grano suelto y todo su sabor ahumado.
                    </p>

                    {/* IMAGEN INTERMEDIA */}
                    <figure className="my-10 relative">
                        <img 
                            src="/BlogImg/PaellaEnCasa.webp" 
                            alt="Primer plano de una paella de arroz a banda"
                            className="w-full rounded-xl shadow-lg border border-gray-800"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-2">
                            Recién hecha, del fuego a tu casa.
                            <span className="block text-xs italic mt-1 opacity-70">(Imagen ilustrativa)</span>
                        </figcaption>
                    </figure>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">El bombazo: ¡Envío GRATIS en toda Elche!</h2>
                    <p className="mb-6 text-xl text-white">
                        Lo has leído bien. Creemos que disfrutar de una buena comida no debería tener costes ocultos.
                    </p>
                    <ul className="list-disc pl-6 mb-8 space-y-4 border-l border-gray-800 py-4 my-6 bg-gray-900/50 rounded-r-xl">
                        <li><strong>Precio cerrado:</strong> Pagas por tu arroz, no por el transporte.</li>
                        <li><strong>Toda Elche:</strong> Llegamos a cualquier barrio de la ciudad.</li>
                        <li><strong>Sin sorpresas:</strong> El precio que ves en la carta es el precio final.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">¿Prefieres recogerla tú?</h2>
                    <p className="mb-6">
                        ¡Sin problema! Si te pilla de paso o prefieres asegurarte la hora exacta, puedes encargarla y recogerla donde mejor te venga: en nuestro Restaurante o en nuestros locales de Altabix y Congresos (nosotros te la llevamos allí). Te la entregaremos recién hecha y perfectamente embalada para que llegue impecable a tu casa.                    
                    </p>

                    <p className="mt-8 mb-12 font-medium text-white text-center text-xl">
                        Este domingo (o cualquier día), cuelga el delantal. Nosotros cocinamos.
                    </p>

                    {/* --- CTA BUTTONS (LO QUE PEDÍAS) --- */}
                    <div className="bg-gray-900 p-8 rounded-2xl mt-8 border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                        <h3 className="text-2xl font-bold text-center text-white mb-6">¿Qué te apetece hacer hoy?</h3>
                        
                        <div className="flex flex-col gap-4 md:gap-6">
                            {/* BOTÓN 1: RESERVAR (LLAMADA A LA ACCIÓN DIRECTA) */}
                            <Link 
                                to={APP_ROUTES.CONTACTO} 
                                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-bold rounded-lg text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all uppercase tracking-wider"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {/* Icono de teléfono/reserva */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-800 group-hover:text-yellow-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                Reservar / Encargar Paella Ahora
                            </Link>

                            {/* BOTÓN 2: VER CARTA (INFORMACIONAL) */}
                            <Link 
                                to={APP_ROUTES.CARTA_PAELLAS_DOMICILIO} 
                                className="w-full flex justify-center py-4 px-4 border-2 border-white text-lg font-bold rounded-lg text-white hover:bg-white hover:text-black focus:outline-none transition-all uppercase tracking-wider text-center"
                            >
                                Ver la Sección de Paellas para Llevar
                            </Link>
                        </div>
                        <p className="text-center text-gray-500 text-sm mt-4">
                            * Te recomendamos encargar con antelación, especialmente fines de semana.
                        </p>
                    </div>

                </div>
            </article>
        </>
    );
}