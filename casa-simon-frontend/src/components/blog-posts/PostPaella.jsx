import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../config/routes';

// IMAGEN PRINCIPAL (HERO) - RÚSTICA
const heroImage = "/BlogImg/PaellaMarisco.webp";

export default function PostPaella() {
    
    // DATOS ESTRUCTURADOS (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "El secreto de la Paella a la Leña en Elche: Sabor y Tradición",
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
        "datePublished": "2025-01-14",
        "description": "Descubre por qué la paella al sarmiento sabe mejor. En Casa Simón Elche mantenemos la tradición del arroz a la leña y brasa."
    };

    return (
        <>
            <Helmet>
                <title>Mejores Paellas a la Leña en Elche | Casa Simón</title>
                <meta name="description" content="¿Buscas paella auténtica al sarmiento en Elche? Descubre el sabor ahumado de nuestros arroces a la leña. Reserva mesa o pide para llevar." />
                <meta name="keywords" content="paella a la leña elche, arroz al sarmiento, restaurante brasa elche, paella para llevar elche" />
                
                {/* Open Graph */}
                <meta property="og:title" content="El secreto de la Paella a la Leña en Elche" />
                <meta property="og:description" content="No es lo mismo gas que leña. Descubre la diferencia en Casa Simón." />
                <meta property="og:image" content={heroImage} />
                <meta property="og:type" content="article" />
                
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <article className="min-h-screen bg-black text-white pt-24 pb-12">
                
                {/* --- HERO IMAGE (FOTO 1: PAELLA COCINÁNDOSE) --- */}
                <div className="w-full h-[50vh] relative mb-12 group">
                    <img 
                        src={heroImage} 
                        alt="Paella valenciana cocinada a la leña con sarmientos en Casa Simón Elche" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-10 left-0 right-0 px-4 text-center z-20">
                        <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded uppercase text-xs tracking-widest mb-3 inline-block">
                            Gastronomía y Tradición
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                            El secreto del <span className="text-yellow-400">Arroz a la Leña</span>: Por qué en Elche preferimos el Sarmiento
                        </h1>
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
                        Hay una diferencia abismal entre comer para alimentarse y comer para disfrutar. En <strong>Casa Simón</strong>, creemos que el tiempo es el mejor ingrediente. Por eso, mientras muchos se han pasado a la comodidad del gas, nosotros seguimos fieles al fuego vivo, a la leña y al sarmiento.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">¿Leña o Gas? La batalla del sabor</h2>
                    <p className="mb-6">
                        La paella a la leña no es solo una forma de cocinar, es un aroma. Cuando cocinamos nuestros arroces con sarmientos (las ramas secas de la vid), el humo impregna el arroz aportando unos matices ahumados que son imposibles de replicar en una cocina convencional.
                    </p>
                    <p className="mb-6">
                        En nuestros locales de <strong>Elche</strong>, controlamos el fuego de forma artesanal. Una llama viva al principio para el sofrito, y un fuego suave de brasas al final para conseguir ese punto perfecto del grano.
                    </p>

                    {/* --- IMAGEN INTERMEDIA (FOTO 2: OTRA PAELLA ESPECTACULAR) --- */}
                    <figure className="my-10 relative">
                        <img 
                            src="/BlogImg/PaellaRestaurante.webp" 
                            alt="Arroz con costra y paella recién hecha en Casa Simón"
                            className="w-full rounded-xl shadow-lg border border-gray-800"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-2">
                            El resultado final: grano suelto y sabroso.
                            <span className="block text-xs italic mt-1 opacity-70">(Imagen ilustrativa)</span>
                        </figcaption>
                    </figure>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">El ansiado "Socarrat"</h2>
                    <p className="mb-6">
                        Gracias a la distribución desigual del calor de la leña, conseguimos esa fina capa tostada en el fondo de la paella. El <em>socarrat</em> es la prueba de fuego de un buen arroz alicantino, y en Casa Simón es nuestra firma de identidad.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">Nuestras especialidades a la brasa</h2>
                    <p className="mb-6">
                        No solo de arroz vive el hombre. Aprovechamos nuestras brasas para preparar carnes seleccionadas:
                    </p>
                    <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-400">
                        <li><strong className="text-yellow-400">Paella de Conejo y Caracoles:</strong> La reina de la casa.</li>
                        <li><strong className="text-yellow-400">Arroz con Costra:</strong> Típico de Elche, con su huevo gratinado al horno de leña.</li>
                    </ul>

                    {/* CTA FINAL */}
                    <div className="bg-gray-900 border-l-4 border-yellow-500 p-6 my-12 rounded-r-lg">
                        <h3 className="text-xl font-bold text-white mb-2">¿Te ha entrado hambre?</h3>
                        <p className="mb-4 text-sm">No te quedes con las ganas. Puedes reservar mesa en nuestro restaurante o encargar tu paella para llevar este domingo.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
<Link 
    to={`${APP_ROUTES.CARTA_RESTAURANTE}#paellas`} // <--- AÑADIDO #paellas
    className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-white transition-colors text-center"
>                                Ver Carta Restaurante
                            </Link>
                            <Link to={APP_ROUTES.RESERVA_RESTAURANTE} className="border border-white text-white font-bold py-2 px-6 rounded hover:bg-white hover:text-black transition-colors text-center">
                                Reservar Ahora
                            </Link>
                        </div>
                    </div>

                    <p className="mb-6">
                        Si estás en Elche (zona Altabix o Congresos) y buscas la auténtica experiencia tradicional, ven a vernos. El fuego ya está encendido.
                    </p>

                </div>
            </article>
        </>
    );
}