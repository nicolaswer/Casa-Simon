import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../config/routes';

export default function PostCarnes() {
    
    // DATOS ESTRUCTURADOS (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Carnes a la Brasa en Elche: El secreto del fuego",
        "image": "/BlogImg/Chuleton.webp", 
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
        "description": "Disfruta del mejor Chuletón, Chuletas de Cordero y Pollo de campo a la Brasa en Elche. Cocina de fuego vivo y producto de calidad en Casa Simón."
    };

    return (
        <>
            {/* --- SEO ON-PAGE --- */}
            <Helmet>
                <title>Carnes a la Brasa en Elche: Chuletón y Cordero | Casa Simón</title>
                <meta name="description" content="¿Amante de la carne? Ven a probar nuestro Chuletón a la brasa, las chuletas de cordero crujientes y el pollo de campo asado al fuego vivo. Elche, zona Altabix y Congresos." />
                <meta name="keywords" content="carne a la brasa elche, chuleton elche, chuletas cordero brasa, pollo de campo a la brasa elche, asador elche" />
                
                {/* Open Graph */}
                <meta property="og:title" content="Carnes a la Brasa: El punto perfecto en Casa Simón" />
                <meta property="og:description" content="Chuletón, Cordero y Pollo de campo. Sin secretos, solo fuego y buen producto." />
                <meta property="og:image" content="/BlogImg/Chuleton.webp" />
                <meta property="og:type" content="article" />
                
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            {/* --- CONTENIDO --- */}
            <article className="min-h-screen bg-black text-white pt-24 pb-12">
                
                {/* --- HERO IMAGE (FOTO 1: CHULETÓN) --- */}
                <div className="w-full h-[50vh] relative mb-12 group">
                    <img 
                        src="/BlogImg/Chuleton.webp" 
                        alt="Chuletón de carne cocinándose en parrilla con fuego vivo en Casa Simón Elche" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-10 left-0 right-0 px-4 text-center z-20">
                        <span className="bg-red-600 text-white font-bold px-3 py-1 rounded uppercase text-xs tracking-widest mb-3 inline-block">
                            Asador y Brasería
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                            El arte de la <span className="text-yellow-400">Carne a la Brasa</span>: Fuego, Sal y Tiempo
                        </h1>
                    </div>

                    {/* 👇 DISCLAIMER FOTO 1 (OPCIÓN 2) 👇 */}
                    <div className="absolute bottom-3 right-4 z-20 pointer-events-none">
                        <span className="text-[10px] text-white/60 uppercase tracking-widest font-light backdrop-blur-sm bg-black/10 px-2 py-1 rounded">
                            Sugerencia de presentación
                        </span>
                    </div>
                </div>

                {/* CUERPO DEL ARTÍCULO */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed text-lg">
                    
                    <p className="mb-8 first-letter:text-5xl first-letter:text-yellow-400 first-letter:font-bold first-letter:float-left first-letter:mr-3">
                        Dominar el fuego es el instinto más primitivo de la cocina. En <strong>Casa Simón Elche</strong>, no escondemos el sabor detrás de salsas complicadas. Creemos que cuando el producto es bueno, solo necesita brasas vivas y el punto exacto de sal.
                    </p>

                    <p className="mb-8">
                        Para los carnívoros de verdad, hemos seleccionado tres cortes fundamentales que, pasados por nuestras parrillas, alcanzan un nivel superior.
                    </p>

                    {/* SECCIÓN 1: CHULETÓN */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-yellow-500 pl-4">
                        1. El Chuletón: La joya de la corona
                    </h2>
                    <p className="mb-6">
                        Es el rey de la mesa. Nuestro <strong>Chuletón de carne</strong> es una pieza seleccionada pensada para compartir (o para valientes solitarios). La magia ocurre en la parrilla: el calor intenso sella el exterior creando esa costra dorada y sabrosa (la famosa reacción de Maillard), mientras que el interior se mantiene jugoso y tierno.
                    </p>
                    <p className="mb-6">
                        Al cortarlo, el aroma ahumado de la brasa se mezcla con los jugos naturales de la carne. Es una experiencia que justifica por sí sola la visita a nuestro restaurante.
                    </p>

                    {/* --- IMAGEN INTERMEDIA (FOTO 2: CHULETAS CORDERO) --- */}
                    <figure className="my-10 relative">
                        <img 
                            src="/BlogImg/ChuletasCordero.webp" 
                            alt="Plato de chuletas de cordero a la brasa recién hechas"
                            className="w-full rounded-xl shadow-lg border border-gray-800"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-2">
                            Nuestras chuletas de cordero, crujientes por fuera y tiernas por dentro.
                            {/* AÑADIDO DISCLAIMER AQUÍ TAMBIÉN */}
                            <span className="block text-xs italic mt-1 opacity-70">(Imagen ilustrativa)</span>
                        </figcaption>
                    </figure>

                    {/* SECCIÓN 2: CORDERO */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-yellow-500 pl-4">
                        2. Chuletas de Cordero: Sabor tradicional
                    </h2>
                    <p className="mb-6">
                        Si el chuletón es potencia, las <strong>chuletas de cordero</strong> son delicadeza. En Casa Simón las preparamos a la brasa hasta que la grasa queda perfectamente tostada y crujiente ("churruscadita", como nos gusta en Alicante), pero manteniendo la carne tierna que se separa del hueso sin esfuerzo.
                    </p>
                    <p className="mb-6">
                        Son ideales para quienes buscan ese sabor característico del campo y la leña en cada bocado.
                    </p>

                    {/* SECCIÓN 3: POLLO */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-yellow-500 pl-4">
                        3. Pollo de campo a la Brasa: Un clásico reinventado
                    </h2>
                    <p className="mb-6">
                        Olvida el pollo de campo asado convencional. Nuestro <strong>Pollo de campo a la Brasa</strong> juega en otra liga. Al cocinarse sobre el fuego real, la piel adquiere una textura y un sabor ahumado que un horno eléctrico jamás podría conseguir.
                    </p>
                    <p className="mb-6">
                        Es una opción más ligera pero cargada de sabor, perfecta tanto para una comida en nuestro local como para llevarte a casa un domingo cualquiera.
                    </p>

                    {/* CTA FINAL */}
                    <div className="bg-gray-900 p-8 rounded-2xl mt-12 text-center border border-gray-700 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-2">¿Cuál es tu corte favorito?</h3>
                        <p className="text-gray-400 mb-6">Ven a probar el punto de la carne en Casa Simón.</p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
<Link 
    to={`${APP_ROUTES.CARTA_RESTAURANTE}#carnes`} // <--- AÑADIDO #carnes
    className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors"
>                                Ver Carta Restaurante
                            </Link>
                            <Link to={APP_ROUTES.RESERVA_RESTAURANTE} className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors">
                                Reservar Ahora
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
        </>
    );
}