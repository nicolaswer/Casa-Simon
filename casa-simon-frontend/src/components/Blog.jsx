import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // 👈 IMPORTANTE PARA SEO
import { APP_ROUTES } from '../config/routes';

// --- DATOS DEL BLOG ---
const blogPosts = [
    
    {
        id: 1, // Dale un ID nuevo
        category: "A Domicilio",
        title: "¡Paellas a Domicilio en Elche con ENVÍO GRATIS!",
        excerpt: "¿No te apetece salir? Te llevamos tu arroz a la leña recién hecho a la puerta de casa. Sin costes extra en toda Elche.",
        // Usamos la misma imagen impactante del artículo
        image: "/BlogImg/FurgonDomicilio.webp",
        link: APP_ROUTES.BLOG_POST_DOMICILIO
    },    
    {
        id: 2,
        category: "Nuestra Cocina",
        title: "El secreto de nuestras Paellas a la Leña",
        excerpt: "No hay atajos para el sabor auténtico. Descubre por qué el sarmiento y el fuego vivo hacen que nuestros arroces tengan ese 'socarrat' y aroma inconfundible.",
        image: "/BlogImg/PaellaALeña.webp",
        // 👇 AQUÍ CONECTAMOS CON EL ARTÍCULO QUE CREAMOS ANTES
        link: APP_ROUTES.BLOG_POST_PAELLA 
    },
    {
        id: 3,
        category: "Brasería",
        title: "Carnes a la Brasa: El punto perfecto",
        excerpt: "Chuletones, entrecots y las mejores piezas seleccionadas. Te contamos cómo tratamos el producto en nuestras parrillas para conseguir esa textura tierna y ahumada.",
        image:"/BlogImg/Chuleton.webp",
        link: APP_ROUTES.BLOG_POST_CARNES
    },
    {
        id: 4,
        category: "Para Llevar",
        title: "Comida Casera en Altabix y Congresos",
        excerpt: "¿Sin tiempo para cocinar? En nuestros locales de recogida tenemos guisos, pastas y asados listos cada mañana. Cocina de abuela, pero para llevar.",
        image: "/BlogImg/ComidaParaLlevar.webp", // (O la url de Unsplash si no la has descargado aun)
        link: APP_ROUTES.BLOG_POST_LOCALES
    },
    {
        id: 5, // Nuevo ID
        category: "Tradición",
        title: "El Almuerzo Popular: Bocadillos y Tapas",
        excerpt: "Blanco y negro, tortilla, lomo... descubre el ritual del 'esmorzaret' con nuestro pan a la brasa y tapas caseras.",
        image: "/BlogImg/Bocadillo.webp", // (O la url de Unsplash si no la has descargado aun)
        link: APP_ROUTES.BLOG_POST_ALMUERZOS
    },
    {
        id: 6, // Nuevo ID
        category: "Repostería",
        title: "El final dulce: Tarta de Elche y Postres Caseros",
        excerpt: "¿Eres de los que guardan hueco para el postre? Prueba nuestra tarta de almendra y nuestros dulces 100% caseros.",
        image: "/BlogImg/Postres.webp", // O la URL de unsplash directa
        link: APP_ROUTES.BLOG_POST_POSTRES
    }
];

export default function Blog() {
    return (
        <>
            {/* --- SEO DE LA PÁGINA PRINCIPAL DEL BLOG --- */}
            <Helmet>
                <title>Blog Gastronómico | Casa Simón Elche</title>
                <meta name="description" content="Descubre los secretos de la cocina a la leña, nuestras recetas tradicionales y novedades de Casa Simón en Elche. Paellas, brasas y comida casera." />
            </Helmet>

            <div className="min-h-screen bg-black text-white pt-24 pb-12">
                
                {/* --- CABECERA --- */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                    <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-2 block">
                        Actualidad Gastronómica
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        El Blog de Casa Simón
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Pasión por el fuego, el sarmiento y la tradición ilicitana.
                    </p>
                </div>

                {/* --- GRID DE ARTÍCULOS --- */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        
                        {blogPosts.map((post) => (
                            <article 
                                key={post.id} 
                                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 group" 
                            >
                                {/* IMAGEN (Con efecto Zoom al pasar ratón) */}
                                <Link to={post.link} className="block h-48 overflow-hidden relative cursor-pointer">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                                        {post.category}
                                    </div>
                                </Link>

                                {/* CONTENIDO */}
                                <div className="p-6">
                                    <Link to={post.link}>
                                        <h2 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    
                                    <Link 
                                        to={post.link} 
                                        className="inline-flex items-center text-yellow-400 font-medium text-sm hover:text-white transition-colors"
                                    >
                                        Leer artículo completo 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}

                    </div>
                </div>

                {/* --- CTA FINAL --- */}
                <div className="mt-20 text-center px-4">
                    <h3 className="text-2xl font-bold mb-6">¿Prefieres probarlo a leerlo?</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            to={APP_ROUTES.CARTA_RESTAURANTE} 
                            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors shadow-lg hover:shadow-yellow-500/20"
                        >
                            Ver Carta Restaurante
                        </Link>
                        <Link 
                            to={APP_ROUTES.CARTA_LLEVAR} 
                            className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors"
                        >
                            Ver Carta Local
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}