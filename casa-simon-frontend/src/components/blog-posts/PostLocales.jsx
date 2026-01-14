import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../config/routes';

export default function PostLocales() {
    
    // DATOS ESTRUCTURADOS (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Comida Casera para Llevar en Elche: Altabix y Congresos",
        "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6", // Foto de comida casera
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
        "description": "¿Buscas comida para llevar en Elche? En zona Altabix y Congresos preparamos guisos, pastas y asados caseros cada día. Olvida cocinar hoy."
    };

    return (
        <>
            {/* --- SEO ON-PAGE --- */}
            <Helmet>
                <title>Comida Casera para Llevar en Elche (Altabix y Congresos) | Casa Simón</title>
                <meta name="description" content="¿Sin tiempo para cocinar? Recoge tu comida casera en Casa Simón. Tenemos locales en Altabix y Zona Congresos. Guisos, pollos asados y paellas para llevar." />
                <meta name="keywords" content="comida para llevar elche, comida casera para llevar, pollos asados elche, casa simon altabix, casa simon congresos" />
                
                {/* Open Graph */}
                <meta property="og:title" content="Comida Casera: Del fuego a tu mesa en minutos" />
                <meta property="og:description" content="Guisos, pastas y asados listos para recoger en Altabix y Congresos." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1543339308-43e59d6b73a6" />
                <meta property="og:type" content="article" />
                
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            {/* --- CONTENIDO --- */}
            <article className="min-h-screen bg-black text-white pt-24 pb-12">
                
                {/* --- HERO IMAGE (COMIDA CASERA VARIADA) --- */}
                <div className="w-full h-[50vh] relative mb-12 group">
                    <img 
                        src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt="Mostrador con variedad de comida casera para llevar en tuppers" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-10 left-0 right-0 px-4 text-center z-20">
                        <span className="bg-green-600 text-white font-bold px-3 py-1 rounded uppercase text-xs tracking-widest mb-3 inline-block">
                            Para Llevar / Take Away
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                            Comida Casera en <span className="text-yellow-400">Altabix y Congresos</span>: Hoy cocinamos nosotros
                        </h1>
                    </div>

                    {/* DISCLAIMER FOTO 1 (OPCIÓN 2) */}
                    <div className="absolute bottom-3 right-4 z-20 pointer-events-none">
                        <span className="text-[10px] text-white/60 uppercase tracking-widest font-light backdrop-blur-sm bg-black/10 px-2 py-1 rounded">
                            Sugerencia de presentación
                        </span>
                    </div>
                </div>

                {/* CUERPO DEL ARTÍCULO */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed text-lg">
                    
                    <p className="mb-8 first-letter:text-5xl first-letter:text-yellow-400 first-letter:font-bold first-letter:float-left first-letter:mr-3">
                        Vivimos corriendo. El trabajo, los estudios, la familia... A veces, lo último que te apetece al llegar a casa es ponerte a pelar patatas. Pero eso no significa que tengas que caer en la comida rápida industrial. En <strong>Casa Simón</strong>, llenamos ese hueco con cocina de verdad, hecha a fuego lento, pero lista para llevar.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">Más allá de la Paella: Nuestra cocina diaria</h2>
                    <p className="mb-6">
                        Aunque somos famosos por nuestros arroces a la leña, nuestros mostradores de comida para llevar ofrecen mucho más. Cada mañana, nuestro equipo prepara recetas tradicionales con ingredientes frescos del mercado.
                    </p>
                    <p className="mb-6">
                        ¿Qué puedes encontrar en nuestros locales?
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <li className="bg-gray-900 p-4 rounded border border-gray-800">
                            <strong className="text-yellow-400 block mb-1">🥘 Guisos de Cuchara</strong>
                            Lentejas, cocido, ollas... como los de la abuela.
                        </li>
                        <li className="bg-gray-900 p-4 rounded border border-gray-800">
                            <strong className="text-yellow-400 block mb-1">🍝 Pastas y Lasañas</strong>
                            Favoritos de los niños (y no tan niños).
                        </li>
                        <li className="bg-gray-900 p-4 rounded border border-gray-800">
                            <strong className="text-yellow-400 block mb-1">🍗 Asados</strong>
                            Pollo asado, costillares y carnes al horno.
                        </li>
                        <li className="bg-gray-900 p-4 rounded border border-gray-800">
                            <strong className="text-yellow-400 block mb-1">🥗 Ensaladas Frescas</strong>
                            La opción ligera y saludable para acompañar.
                        </li>
                    </ul>

                    {/* --- IMAGEN INTERMEDIA (GUISO/CASERO) --- */}
                    <figure className="my-10 relative">
                        <img 
                            src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                            alt="Plato de comida casera caliente servido tradicionalmente"
                            className="w-full rounded-xl shadow-lg border border-gray-800"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-2">
                            Platos de cuchara y cocina tradicional, listos para recoger.
                            {/* DISCLAIMER FOTO 2 */}
                            <span className="block text-xs italic mt-1 opacity-70">(Imagen ilustrativa)</span>
                        </figcaption>
                    </figure>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">¿Dónde encontrarnos en Elche?</h2>
                    <p className="mb-6">
                        Sabemos que la comodidad es clave. Por eso tenemos puntos estratégicos para que recojas tu comida sin desviarte de tu ruta.
                    </p>

                    <div className="space-y-6">
                        {/* ZONA ALTABIX */}
                        <div className="border-l-4 border-yellow-500 pl-6">
                            <h3 className="text-xl font-bold text-white">📍 Zona Altabix</h3>
                            <p className="text-gray-400 mt-1">
                                Ideal para universitarios y vecinos del barrio. Parada rápida, comida caliente y a seguir con el día.
                            </p>
                        </div>

                        {/* ZONA CONGRESOS */}
                        <div className="border-l-4 border-yellow-500 pl-6">
                            <h3 className="text-xl font-bold text-white">📍 Zona Congresos</h3>
                            <p className="text-gray-400 mt-1">
                                Perfecto si trabajas por la zona nueva o vienes de paso. Fácil acceso para recoger tus encargos de fin de semana.
                            </p>
                        </div>
                    </div>

                    <p className="mt-8 mb-6">
                        Ya sea un martes cualquiera o una celebración familiar de domingo, nosotros ponemos la cocina y tú pones la mesa.
                    </p>

                    {/* CTA FINAL */}
                    <div className="bg-gray-900 p-8 rounded-2xl mt-12 text-center border border-gray-700 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-2">Mira qué hemos cocinado hoy</h3>
                        <p className="text-gray-400 mb-6">Consulta nuestra oferta y precios actualizados.</p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to={APP_ROUTES.CARTA_LLEVAR} className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
                                Ver Carta Local
                            </Link>
                            <Link to={APP_ROUTES.HOME} className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors">
                                Contactar / Encargar
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
        </>
    );
}