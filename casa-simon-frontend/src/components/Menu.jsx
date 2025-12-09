import React, { useState, useEffect } from 'react';
import { 
  Salad, 
  Wheat, 
  UtensilsCrossed, 
  ChefHat, 
  IceCream, 
  ArrowLeft,
  Coffee,
  Soup,
  Drumstick,
  Fish
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../config/routes';

const getCategoryIcon = (id) => {
  const safeId = id ? id.toLowerCase() : '';
  if (safeId.includes('ensalada') || safeId.includes('huerta')) return <Salad className="w-5 h-5" />;
  if (safeId.includes('pasta') || safeId.includes('fideua')) return <Wheat className="w-5 h-5" />;
  if (safeId.includes('arroz') || safeId.includes('arroces')) return <ChefHat className="w-5 h-5" />;
  if (safeId.includes('postre') || safeId.includes('dulce')) return <IceCream className="w-5 h-5" />;
  if (safeId.includes('carne') || safeId.includes('brasas')) return <Drumstick className="w-5 h-5" />;
  if (safeId.includes('pescado') || safeId.includes('mar')) return <Fish className="w-5 h-5" />;
  if (safeId.includes('casero') || safeId.includes('guiso')) return <Soup className="w-5 h-5" />;
  if (safeId.includes('bebida') || safeId.includes('cafe')) return <Coffee className="w-5 h-5" />;
  return <UtensilsCrossed className="w-5 h-5" />;
};

// Componente Menu con soporte para separadores visuales
const Menu = ({ data, title, showTaxWarning = false }) => {
  const [activeCategory, setActiveCategory] = useState('');
  const [isManualScroll, setIsManualScroll] = useState(true); // Estado para controlar el scroll manual

  // 1. Efecto Inicial: Selecciona la primera categoría al cargar
  useEffect(() => {
    if (data && data.categorias && data.categorias.length > 0) {
      setActiveCategory(data.categorias[0].id);
    }
  }, [data]);

  // 2. Efecto Scroll Spy MEJORADO (Detecta scroll y final de página)
  useEffect(() => {
    const handleScroll = () => {
      if (!isManualScroll) return;

      const scrollPosition = window.scrollY;
      const headerOffset = 280; // Ajuste para que cambie un poco antes de llegar

      if (!data || !data.categorias) return;

      // --- CORRECCIÓN FINAL DE PÁGINA ---
      // Detectamos si el usuario ha llegado al fondo del todo
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        const lastCategory = data.categorias[data.categorias.length - 1];
        
        // Solo actualizamos si no es ya la actual (para optimizar rendimiento)
        if (activeCategory !== lastCategory.id) {
            setActiveCategory(lastCategory.id);
            
            // Movemos la barra de navegación también para que se vea el botón
            const button = document.getElementById(`btn-${lastCategory.id}`);
            if (button) {
              button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
        return; // IMPORTANTE: Salimos aquí para que la lógica normal no lo sobrescriba
      }
      // ----------------------------------

      // Lógica Normal (recorre todas las categorías)
      for (const cat of data.categorias) {
        const element = document.getElementById(cat.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (
            scrollPosition + headerOffset >= offsetTop && 
            scrollPosition + headerOffset < offsetTop + offsetHeight
          ) {
            setActiveCategory(cat.id);
            const button = document.getElementById(`btn-${cat.id}`);
            if (button) {
              button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data, isManualScroll, activeCategory]);


  if (!data || !data.categorias) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-yellow-400">
        <div className="animate-pulse flex flex-col items-center">
          <ChefHat className="w-12 h-12 mb-4" />
          <p className="font-serif tracking-widest">CARGANDO CARTA...</p>
        </div>
      </div>
    );
  }

  const accentColor = "text-yellow-400";
  
  const scrollToCategory = (id) => {
    setIsManualScroll(false); // Desactivamos el espía temporalmente
    setActiveCategory(id);
    
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -150; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });

      // Reactivamos el espía cuando termine la animación de scroll
      setTimeout(() => {
        setIsManualScroll(true);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-20 pt-20">
      
      {/* --- CONTENEDOR DE NAVEGACIÓN DE CATEGORÍAS --- */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-gray-900 transition-all duration-300">
        
        <div className="relative flex flex-col items-center justify-center px-6 pt-2">
           
          <h1 className="text-xl md:text-3xl font-bold font-serif text-white tracking-widest uppercase text-center mb-1">
            {title}
          </h1>

          {/* CONDICIONAL: Precios por Ración */}
          {showTaxWarning && (
            <p className="text-[10px] md:text-xs text-yellow-400/80 uppercase tracking-widest font-sans font-medium">
              Precios por Ración
            </p>
          )}
        </div>

        {/* Botones de Categoría */}
        <div className="w-full border-t border-gray-900 overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center px-4 py-3 gap-4 min-w-max">
            {data.categorias.map((cat) => (
              <button
                key={cat.id}
                id={`btn-${cat.id}`} // IMPORTANTE: ID necesario para el scroll automático de la barra
                onClick={() => scrollToCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm whitespace-nowrap transition-all duration-300 text-xs md:text-sm font-bold uppercase tracking-wide border ${
                  activeCategory === cat.id
                    ? `bg-yellow-400 text-black border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.4)]`
                    : 'bg-transparent text-gray-500 border-transparent hover:text-gray-200'
                }`}
              >
                {getCategoryIcon(cat.id)}
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- CONTENIDO --- */}
      <div className="pt-56 max-w-4xl mx-auto px-4 space-y-20">
        {data.categorias.map((categoria) => (
          <section key={categoria.id} id={categoria.id} className="scroll-mt-52">
            
            <div className="flex flex-col items-center mb-10 text-center">
              <h2 className={`text-3xl md:text-4xl font-serif ${accentColor} mb-2`}>
                {categoria.nombre}
              </h2>
              {categoria.descripcion && (
                <div className="flex items-center gap-4 w-full justify-center">
                   <div className="h-px w-12 bg-gray-800"></div>
                   <p className="text-gray-400 text-sm italic">{categoria.descripcion}</p>
                   <div className="h-px w-12 bg-gray-800"></div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {categoria.platos.map((plato, index) => {
                
                // --- LÓGICA PARA SEPARADORES (TÍTULOS DE SUBSECCIÓN) ---
                if (!plato.precio) {
                  return (
                    <div 
                      key={index} 
                      className="col-span-1 md:col-span-2 pt-8 pb-4 text-center"
                    >
                      <h3 className="text-xl md:text-2xl font-serif text-yellow-400 border-b border-yellow-400/30 inline-block px-6 pb-2 tracking-widest uppercase">
                        {plato.nombre}
                      </h3>
                      {plato.ingredientes && (
                        <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">
                          {plato.ingredientes}
                        </p>
                      )}
                    </div>
                  );
                }

                // --- LÓGICA PARA PLATOS NORMALES ---
                return (
                  <div 
                    key={index} 
                    className="group relative flex justify-between items-end border-b border-gray-900 pb-3 hover:border-gray-700 transition-colors duration-300"
                  >
                    <div className="pr-4">
                      <h3 className="text-lg font-medium text-gray-200 group-hover:text-yellow-400 transition-colors duration-300">
                        {plato.nombre}
                      </h3>
                      {plato.ingredientes && (
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{plato.ingredientes}</p>
                      )}
                    </div>
                    
                    <div className="shrink-0 text-right">
                      <span className="text-lg font-bold text-white tabular-nums tracking-wide">
                        {plato.precio.includes('ud') || plato.precio.includes('S/M') ? plato.precio : `${plato.precio}€`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      
      {/* --- FOOTER --- */}
      <div className="text-center py-20 space-y-3">
        <div className="text-yellow-400 font-serif text-lg tracking-widest">
            Casa Simón
        </div>
        <p className="text-gray-500 text-xs uppercase tracking-wider">
            Calidad y Tradición
        </p>

        {showTaxWarning && (
          <div className="pt-6">
              <span className="px-4 py-2 border border-gray-800 rounded text-gray-400 text-[10px] uppercase tracking-widest bg-gray-900/50">
                  I.V.A. no incluido en los precios
              </span>
          </div>
        )}
      </div>

    </div>
  );
};

export default Menu;