import React from 'react';
import { APP_ROUTES } from '../config/routes'; 
import { Link } from 'react-router-dom';

 function Footer() {
    // ESTILOS REUTILIZABLES
    // Link genérico del footer (gris a amarillo)
    const linkStyle = "text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm block mb-2 cursor-pointer";
    // Estilo para los títulos de las columnas
    const columnTitleStyle = "text-white font-semibold text-lg mb-4";
    // Estilo para los textos de horario
    const scheduleTextStyle = "text-sm text-gray-400 leading-relaxed";
    // Estilo específico para los enlaces a MAPS (títulos de los locales)
    const mapLinkStyle = "block text-sm font-bold hover:text-yellow-400 transition-colors duration-200 mb-1 flex items-center gap-1";

    return (
        <footer className="bg-black text-white pt-12 pb-6 border-t border-gray-800 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- GRID DE 3 COLUMNAS --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* COLUMNA 1: UBI + HORARIOS (DOFOLLOW A MAPS) */}
                    <div>
                        <h3 className={columnTitleStyle}>Dónde estamos</h3>
                        <div className="space-y-5">
                            
                            {/* Local 1 */}
                            <div>
                                <a 
                                    href="https://maps.app.goo.gl/YNQkjVPUNcEciiMw9"                                    
                                    target="_blank" 
                                    rel="noopener" // "dofollow" es el comportamiento por defecto. noopener es por seguridad.
                                    className={`${mapLinkStyle} text-yellow-400`}
                                    title="Ver ubicación en Google Maps"
                                >
                                    Restaurante Casa Simón
                                </a>
                                <p className={scheduleTextStyle}>Martes a Domingo: 8:00 - 16:30</p>
                            </div>

                            {/* Local 2 */}
                            <div>
                                <a 
                                    href="https://maps.app.goo.gl/usUG4Zkwtos5XoUC6?g_st=iw"                                    
                                    target="_blank" 
                                    rel="noopener"
                                    className={`${mapLinkStyle} text-white`}
                                    title="Ver ubicación en Google Maps"
                                >
                                    Local Altabix
                                </a>
                                <p className={scheduleTextStyle}>Lunes a Domingo: 10:00 - 16:00</p>
                            </div>

                            {/* Local 3 */}
                            <div>
                                <a 
                                    href="https://maps.app.goo.gl/x7q2nqYraxRJAna46"                                    
                                    target="_blank" 
                                    rel="noopener"
                                    className={`${mapLinkStyle} text-white`}
                                    title="Ver ubicación en Google Maps"
                                >
                                    Local Congresos
                                </a>
                                <p className={scheduleTextStyle}>Lunes a Domingo: 10:00 - 16:00</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA 2: LEGAL (NOFOLLOW) */}
                    <div className="md:text-center">
                        <h3 className={columnTitleStyle}>Legal</h3>
                        <nav>
                            {/* Aviso Legal - NoFollow para no gastar Crawl Budget */}
                            <Link 
                                to={APP_ROUTES.AVISO_LEGAL} 
                                className={linkStyle}
                            >
                                Aviso Legal
                            </Link>
                            
                            {/* Privacidad - NoFollow */}
                            <Link 
                                to={APP_ROUTES.PRIVACIDAD} 
                                className={linkStyle}
                            >
                                Política de Privacidad
                            </Link>

                        </nav>
                    </div>

                    {/* COLUMNA 3: BLOG (DOFOLLOW)  */}
                    <div className="md:text-right">
                        <h3 className={columnTitleStyle}>Comunidad</h3>
                        <nav>
                            <Link 
                                to={APP_ROUTES.BLOG} 
                                className={linkStyle}
                            >
                                Nuestro Blog Gastronómico
                            </Link>

                        </nav>
                    </div>

                </div>

                {/* --- COPYRIGHT --- */}
                <div className="border-t border-gray-800 pt-6 text-center">
                    <p className="text-sm font-light text-gray-500">
                        <span className="text-white font-medium">Casa Simón</span> 
                        <span className="mx-2">|</span> 
                        &copy; {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;