import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../config/routes';

export default function PostAlmuerzos() {
    
    // FOTO PRINCIPAL
    const heroImage = "https://images.unsplash.com/photo-1626202158925-56a644265449?q=80&w=1600&auto=format&fit=crop";

    // DATOS ESTRUCTURADOS (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Almuerzos en Elche: Bocadillos, Platos Combinados y Tapas",
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
        "description": "De 8:00 a 13:00. Disfruta de nuestros bocadillos especiales (Jazmín, Dani, Bicicleta), platos combinados, tostadas y tapas de barra. Acompañado de ensalada y cerveza helada."
    };

    return (
        <>
            {/* --- SEO ON-PAGE --- */}
            <Helmet>
                <title>Almuerzos y Desayunos en Elche (8:00-13:00) | Casa Simón</title>
                <meta name="description" content="¿Buscas un buen almuerzo? De 8 a 13h. Bocadillos gigantes, platos combinados, tostadas y nuestra famosa ensalada. Cerveza en jarra helada y tapas caseras." />
                <meta name="keywords" content="almuerzos elche, bocadillo jazmin, platos combinados elche, bar desayunos elche, tapas barra elche" />
                
                {/* Open Graph */}
                <meta property="og:title" content="El Ritual del Almuerzo en Casa Simón (8:00 - 13:00)" />
                <meta property="og:description" content="Bocadillos, Platos Combinados, Tapas y Jarras Heladas. Así se empieza el día." />
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
                        alt="Mesa de almuerzo con bocadillo, ensalada y cerveza en Elche" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    
                    <div className="absolute bottom-10 left-0 right-0 px-4 text-center z-20">
                        <span className="bg-orange-600 text-white font-bold px-3 py-1 rounded uppercase text-xs tracking-widest mb-3 inline-block">
                            De 08:00 a 13:00
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                            El ritual del <span className="text-yellow-400">Almuerzo</span>: Bocadillos, Combinados y Tapas
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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed text-lg">
                    
                    <p className="mb-8 first-letter:text-5xl first-letter:text-yellow-400 first-letter:font-bold first-letter:float-left first-letter:mr-3">
                        En <strong>Casa Simón</strong>, nos tomamos muy en serio la primera comida fuerte del día. Abrimos nuestras puertas de <strong>08:00 a 13:00</strong> para ofrecerte energía en forma de sabor. Ya seas de bocadillo gigante o de plato y tenedor, aquí tienes tu sitio.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-8 text-center">
                        🏆 Los 3 Bocadillos "Legendarios"
                    </h2>
                    
                    <p className="mb-8 text-center text-gray-400">
                        Nuestras creaciones propias, famosas en todo Elche.
                    </p>

                    {/* --- GRID DE BOCADILLOS --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        
                        {/* 1. EL JAZMÍN */}
                        <div className="bg-gray-900 rounded-xl overflow-hidden border border-yellow-500/30 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-yellow-600 p-2 text-center">
                                <span className="text-black font-bold uppercase tracking-wider text-sm">El de la Casa</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3">El Jazmín</h3>
                                <ul className="text-gray-300 space-y-2 text-sm border-t border-gray-700 pt-4">
                                    <li>🥖 Pan crujiente</li>
                                    <li>🥩 <strong>Lomo fresco</strong> y Bacon</li>
                                    <li>🍳 <strong>2 Huevos</strong></li>
                                    <li>🥗 Lechuga, Tomate y Mayonesa</li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. EL DANI */}
                        <div className="bg-gray-900 rounded-xl overflow-hidden border border-orange-500/30 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-orange-700 p-2 text-center">
                                <span className="text-white font-bold uppercase tracking-wider text-sm">Gourmet</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3">El Dani</h3>
                                <ul className="text-gray-300 space-y-2 text-sm border-t border-gray-700 pt-4">
                                    <li>🍞 <strong>Pan Tostado</strong> con Mantequilla</li>
                                    <li>🥩 <strong>Ternera</strong> tierna</li>
                                    <li>🌶️ Pimientos del Padrón</li>
                                    <li>🧀 Queso fundido</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. EL BICICLETA */}
                        <div className="bg-gray-900 rounded-xl overflow-hidden border border-blue-500/30 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-blue-800 p-2 text-center">
                                <span className="text-white font-bold uppercase tracking-wider text-sm">El de los Ciclistas</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3">La Bicicleta</h3>
                                <ul className="text-gray-300 space-y-2 text-sm border-t border-gray-700 pt-4">
                                    <li>🍞 <strong>Pan Tostado</strong></li>
                                    <li>🐟 <strong>Atún y Anchoas</strong></li>
                                    <li>🫒 Olivas rellenas</li>
                                    <li>🍅 Tomate rayado natural</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-yellow-500 pl-4">
                        Más allá del Bocadillo: Tenedor y Cuchara
                    </h2>
                    <p className="mb-6">
                        No todo el mundo quiere pan. Para los que prefieren sentarse con calma, ofrecemos una gran variedad de opciones:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-yellow-400 mb-2">🍽️ Platos Combinados</h3>
                            <p className="text-gray-400 text-sm">
                                Ideales si buscas un almuerzo contundente. Huevos rotos, lomo, embutido, patatas... tú eliges la combinación para recargar pilas.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-yellow-400 mb-2">🥖 Tostadas Variadas</h3>
                            <p className="text-gray-400 text-sm">
                                Para un desayuno más clásico pero con ingredientes de primera. Tomate rayado, aceite de oliva virgen, jamón, queso, aguacate...
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">La Barra: El escaparate del sabor</h2>
                    <p className="mb-6">
                        Nada más entrar, nuestra barra te dará los buenos días. Allí encontrarás expuestas nuestras <strong>Tapas del Día</strong> recién hechas. Desde ensaladilla rusa y magra con tomate, hasta calamares y otras delicias caseras listas para servir al momento.
                    </p>

                    {/* IMAGEN INTERMEDIA */}
                    <figure className="my-10 relative">
                        <img 
                            src="https://images.unsplash.com/photo-1625937759420-26d7e003e04c?q=80&w=1200&auto=format&fit=crop" 
                            alt="Cerveza bien fría y ensalada fresca en mesa"
                            className="w-full rounded-xl shadow-lg border border-gray-800"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-2">
                            El acompañamiento perfecto: Ensalada fresca y bebida helada.
                            <span className="block text-xs italic mt-1 opacity-70">(Imagen ilustrativa)</span>
                        </figcaption>
                    </figure>

                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                        <h2 className="text-2xl font-bold text-white mb-4">🥗 El Acompañamiento Perfecto</h2>
                        <p className="mb-4">
                            En Casa Simón, el almuerzo no va solo. Para refrescar el paladar entre bocado y bocado, servimos una <strong>ensalada completa</strong> con ingredientes frescos:
                        </p>
                        <p className="text-yellow-400 font-medium text-lg text-center border-y border-gray-700 py-3 mb-6">
                            Lechuga · Tomate · Pepino · Cebolla · Atún
                        </p>
                        
                        <h3 className="text-xl font-bold text-white mb-2">🍺 Para beber: Jarras Heladas</h3>
                        <p className="text-gray-400">
                            Lo ideal es acompañarlo con una cerveza bien tirada en nuestras <strong>jarras congeladas</strong>, para que el primer trago sea gloria bendita. Y si no eres de cerveza, tenemos una <strong>gama amplia de refrescos</strong> para todos los gustos.
                        </p>
                    </div>

                    {/* CTA FINAL */}
                    <div className="mt-12 text-center">
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to={APP_ROUTES.CARTA_DESAYUNOS_ALMUERZOS} className="bg-orange-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-700 transition-colors">
                                Ver Precios y Carta
                            </Link>
                            <Link to={APP_ROUTES.CONTACTO} className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors">
                                Ven a Vernos (Mapa)
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
        </>
    );
}