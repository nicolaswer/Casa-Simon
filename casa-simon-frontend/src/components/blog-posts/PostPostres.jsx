import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../config/routes';

export default function PostPostres() {
    
    // FOTO PRINCIPAL: Tarta de almendra (estilo Tarta de Elche)
    const heroImage = "/BlogImg/TartaAlmendra.webp";

    // DATOS ESTRUCTURADOS (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Postres Caseros en Elche: La Tarta de Almendra y más",
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
        "description": "El broche de oro a una buena comida. Descubre nuestra Tarta de Elche (Tarta de Almendra) y nuestra carta de postres 100% caseros: Pan de Calatrava, Tres Chocolates y más."
    };

    return (
        <>
            {/* --- SEO ON-PAGE --- */}
            <Helmet>
                <title>La Tarta de Elche y Postres Caseros | Casa Simón</title>
                <meta name="description" content="Prueba la auténtica Tarta de Almendra (Tarta de Elche). Postres 100% caseros: Pan de Calatrava, Arroz con leche, Tres chocolates y fruta fresca." />
                <meta name="keywords" content="tarta de elche, tarta de almendra elche, pan de calatrava, postres caseros elche, restaurante postres alicante" />
                
                {/* Open Graph */}
                <meta property="og:title" content="El final dulce: Tarta de Elche y Postres Caseros" />
                <meta property="og:description" content="Aquí no hay postres industriales. Huevos, leche, almendra y cariño. Ven a probar la diferencia." />
                <meta property="og:image" content={heroImage} />
                <meta property="og:type" content="article" />
                
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            {/* --- CONTENIDO --- */}
            <article className="min-h-screen bg-black text-white pt-24 pb-12">
                
                {/* HERO IMAGE */}
                <div className="w-full h-[50vh] relative mb-12 group">
                    <img 
                        src={heroImage} 
                        alt="Trozo de tarta de almendra tradicional (Tarta de Elche) en plato" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    
                    <div className="absolute bottom-10 left-0 right-0 px-4 text-center z-20">
                        <span className="bg-pink-700 text-white font-bold px-3 py-1 rounded uppercase text-xs tracking-widest mb-3 inline-block">
                            Repostería Casera
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                            El broche de oro es <span className="text-yellow-400">Casero</span>: La Tarta de Elche
                        </h1>
                    </div>

                    {/* DISCLAIMER FOTO */}
                    <div className="absolute bottom-3 right-4 z-20 pointer-events-none">
                        <span className="text-[10px] text-white/60 uppercase tracking-widest font-light backdrop-blur-sm bg-black/10 px-2 py-1 rounded">
                            Sugerencia de presentación
                        </span>
                    </div>
                </div>

                {/* CUERPO DEL ARTÍCULO */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed text-lg">
                    
                    <p className="mb-8 first-letter:text-5xl first-letter:text-yellow-400 first-letter:font-bold first-letter:float-left first-letter:mr-3">
                        Hay una regla no escrita en la buena gastronomía: una comida excelente puede arruinarse con un postre industrial. En <strong>Casa Simón</strong>, nos negamos a servir tartas congeladas. Aquí, el postre se cocina con el mismo respeto y cariño que nuestra paella a la leña.
                    </p>

                    {/* --- SECCIÓN EXCLUSIVA: TARTA DE ELCHE --- */}
                    <div className="bg-gradient-to-br from-yellow-900/40 to-black border border-yellow-500/30 rounded-2xl p-8 my-12 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                            Especialidad
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-4 text-center">
                            🌟 La Reina: Tarta de Almendra (Tarta de Elche)
                        </h2>
                        <p className="mb-4 text-center text-gray-200">
                            Si vienes a Elche, tienes que probarla. Nuestra versión es un homenaje a la tradición ilicitana.
                        </p>
                        <p className="mb-0">
                            Olvida los bizcochos secos. Aquí hablamos de una textura húmeda, densa y cargada de sabor a <strong>almendra marcona</strong>, el fruto seco por excelencia de nuestra tierra. Es el final perfecto después de un arroz: dulce pero no empalagosa, suave y con ese aroma inconfundible que te hace cerrar los ojos en el primer bocado.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-pink-600 pl-4">
                        Tradición de Cuchara (Recetas de la Abuela)
                    </h2>
                    <p className="mb-6">
                        Para los nostálgicos, mantenemos vivas las recetas de siempre. Leche, huevos frescos, canela y limón. Sin atajos.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-900 p-4 rounded border border-gray-800">
                            <strong className="text-yellow-400 text-lg block mb-1">🍞 Pan de Calatrava</strong>
                            <p className="text-sm">Un clásico de la zona. Suave, similar al flan pero con más cuerpo.</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded border border-gray-800">
                            <strong className="text-yellow-400 text-lg block mb-1">🍮 Flan y Natillas</strong>
                            <p className="text-sm">Como los que se hacían antes en casa. Textura sedosa y sabor real.</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded border border-gray-800 sm:col-span-2">
                            <strong className="text-yellow-400 text-lg block mb-1">🍚 Arroz con Leche</strong>
                            <p className="text-sm">Cremoso, cocinado a fuego lento y con su toque de canela y limón.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-pink-600 pl-4">
                        Para los Golosos: Tartas Cremosas
                    </h2>
                    <p className="mb-6">
                        Si el cuerpo te pide algo más contundente y dulce, tenemos dos opciones que nunca fallan:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-300">
                        <li>
                            <strong className="text-white">🍫 Tarta de Tres Chocolates:</strong> Una bomba de sabor para los amantes del cacao. Tres capas de pura felicidad.
                        </li>
                        <li>
                            <strong className="text-white">🧀 Tarta de Queso:</strong> Cremosa, suave y con el equilibrio perfecto entre dulce y salado.
                        </li>
                    </ul>

                    {/* IMAGEN INTERMEDIA */}
                    <figure className="my-10 relative">
                        <img 
                            src="/BlogImg/PostresVariados.webp" 
                            alt="Postres caseros variados en mesa de restaurante"
                            className="w-full rounded-xl shadow-lg border border-gray-800"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-2">
                            El momento dulce: Cafés, postres y buena compañía.
                            <span className="block text-xs italic mt-1 opacity-70">(Imagen ilustrativa)</span>
                        </figcaption>
                    </figure>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-green-500 pl-4">
                        El Final Fresco: Fruta de Temporada
                    </h2>
                    <p className="mb-6">
                        Después de una comida copiosa como una paella o un asado, a veces lo que mejor entra es algo fresco que limpie el paladar.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-gray-600">🍍 Piña Natural</span>
                        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-gray-600">🍈 Melón</span>
                        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-gray-600">🍉 Sandía (Temporada)</span>
                        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-gray-600">🍓 Fresas con Nata</span>
                    </div>

                    {/* CTA FINAL */}
                    <div className="bg-gray-900 p-8 rounded-2xl mt-12 text-center border border-gray-700 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-2">¿Con cuál te quedas?</h3>
                        <p className="text-gray-400 mb-6">Guarda hueco para el postre. Te prometemos que merece la pena.</p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to={APP_ROUTES.RESERVA_RESTAURANTE} className="bg-pink-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-800 transition-colors">
                                Reservar Mesa
                            </Link>
                            <Link 
                                to={`${APP_ROUTES.CARTA_RESTAURANTE}#postres`} 
                                className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors"
                            >
                                Ver Precios Postres
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
        </>
    );
}