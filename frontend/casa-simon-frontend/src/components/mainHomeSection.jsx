
import { APP_ROUTES } from '../config/routes';

function mainHomeSection() {
    const accentColor = "text-yellow-400";
    const elegantFont = "font-elegante"; 
    const maestroFont = "font-parisienne";
    return (
        <section className="relative w-full h-[700px] flex items-center justify-center text-white">
                <div className="relative z-20 flex flex-col items-center max-w-4xl text-center px-4">
                    
                    <h2 className={`text-5xl md:text-7xl ${maestroFont} font-bold tracking-wide drop-shadow-lg mb-4`}>
                        Maestros del 
                        <span className={`${accentColor}`}> Fuego</span>
                    </h2>
            
                    <p className={`text-xl md:text-2xl ${elegantFont} font-normal mb-12 opacity-90 drop-shadow-lg`}>
                        Arroces a la leña, carnes premium y cocina casera.
                        <br />
                        Disfruta en nuestro restaurante o recógelo en nuestras tiendas.
                    </p>
                    
                    <div className="flex space-x-6">
                        <a
                            href={APP_ROUTES.CARTA}
                            className="px-6 py-3 text-lg font-semibold uppercase tracking-wider 
                                    bg-white text-black rounded-lg shadow-xl 
                                    hover:bg-yellow-400 hover:text-black transition duration-300"
                        >
                            Ver Carta
                        </a>
                    </div>
                    
                </div>
            </section>
    );
}
export default mainHomeSection;