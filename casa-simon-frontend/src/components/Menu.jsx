import React, { useState, useEffect } from 'react';
// 1. IMPORT UNIFICADO Y CORRECTO (Link y useLocation juntos)
import { Link, useLocation } from 'react-router-dom'; 
import { 
  Salad, Wheat, UtensilsCrossed, ChefHat, IceCream, ArrowLeft,
  Coffee, Soup, Drumstick, Fish, 
  // Iconos BÁSICOS (Seguros)
  Milk, Egg, Info, Shell, AlertCircle, Wine, CookingPot, Nut, Sandwich
} from 'lucide-react';
import { APP_ROUTES } from '../config/routes';

// --- 1. ICONOS DE CATEGORÍAS ---
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
  if (safeId.includes('bodega') || safeId.includes('vino')) return <Wine className="w-5 h-5" />;
  if (safeId.includes('paellas') || safeId.includes('arroz')) return <CookingPot className="w-5 h-5" />;
  if (safeId.includes('conserva')) return <Shell className="w-5 h-5" />;
  if (safeId.includes('desayunos')) return <Coffee className="w-5 h-5" />;
  if (safeId.includes('almuerzos')) return <Sandwich className="w-5 h-5" />;
  return <UtensilsCrossed className="w-5 h-5" />;
};

// --- 2. CONFIGURACIÓN DE ALÉRGENOS (VERSIÓN SEGURA) ---
const ALLERGEN_CONFIG = {
  gluten:       { icon: <Wheat size={14} />, label: "Gluten" },
  leche:        { icon: <Milk size={14} />, label: "Leche" },
  huevos:       { icon: <Egg size={14} />, label: "Huevo" },
  pescados:     { icon: <Fish size={14} />, label: "Pescado" },
  moluscos:     { icon: <Shell size={14} />, label: "Moluscos" },
  crustaceos:   { icon: <span className="text-[8px] font-extrabold">CRU</span>, label: "Crustáceos" },
  'fruto seco': { icon: <span className="text-[8px] font-extrabold">FRU</span>, label: "Frutos Secos" },
  soja:         { icon: <span className="text-[8px] font-extrabold">SOJ</span>, label: "Soja" },
  sulfito:      { icon: <span className="text-[8px] font-extrabold">SO2</span>, label: "Sulfitos" },
  cacahuete:    { icon: <span className="text-[8px] font-extrabold">CAC</span>, label: "Cacahuetes" },
  mostaza:      { icon: <span className="text-[8px] font-extrabold">MZ</span>,  label: "Mostaza" },
  apio:         { icon: <span className="text-[8px] font-extrabold">API</span>, label: "Apio" },
  sesamo:       { icon: <span className="text-[8px] font-extrabold">SES</span>, label: "Sésamo" },
  altramuces:   { icon: <span className="text-[8px] font-extrabold">ALT</span>, label: "Altramuces" },
  default:      { icon: <AlertCircle size={14} />, label: "Alérgeno" }
};

const AllergenBadge = ({ type }) => {
  const key = type ? type.toLowerCase() : 'default';
  const config = ALLERGEN_CONFIG[key] || ALLERGEN_CONFIG.default;
  
  return (
    <div 
      title={config.label}
      className="w-6 h-6 rounded-full bg-stone-800 border border-stone-600 flex items-center justify-center text-yellow-500 shadow-sm shrink-0"
    >
      {config.icon}
    </div>
  );
};

const Menu = ({ data, title, showTaxWarning = false }) => {
  const [activeCategory, setActiveCategory] = useState('');
  const [isManualScroll, setIsManualScroll] = useState(true);
  const [showAllergens, setShowAllergens] = useState(false);

  // 2. HOOK PARA LEER LA URL
  const location = useLocation();

  // 3. EFECTO PARA DETECTAR EL HASH (#postres) Y HACER SCROLL
  useEffect(() => {
    if (data && data.categorias && location.hash) {
        // Quitamos el símbolo # para tener solo el id (ej: 'postres')
        const targetId = location.hash.replace('#', '');
        
        // Comprobamos si esa categoría existe en tus datos
        const categoryExists = data.categorias.some(cat => cat.id === targetId);

        if (categoryExists) {
            // Damos un pequeño respiro (500ms) para asegurar que la página ha cargado
            setTimeout(() => {
                scrollToCategory(targetId);
            }, 500);
        }
    }
  }, [data, location]);

  useEffect(() => {
    if (data && data.categorias && data.categorias.length > 0) {
      // Si NO hay hash, activamos la primera categoría por defecto
      if (!location.hash) {
          setActiveCategory(data.categorias[0].id);
      }
    }
  }, [data, location.hash]); // Añadido location.hash a dependencias

  useEffect(() => {
    const handleScroll = () => {
      if (!isManualScroll) return;
      const scrollPosition = window.scrollY;
      const headerOffset = 350;

      if (!data || !data.categorias) return;

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        const lastCategory = data.categorias[data.categorias.length - 1];
        if (activeCategory !== lastCategory.id) {
            setActiveCategory(lastCategory.id);
            const button = document.getElementById(`btn-${lastCategory.id}`);
            if (button) button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
        return; 
      }

      for (const cat of data.categorias) {
        const element = document.getElementById(cat.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition + headerOffset >= offsetTop && scrollPosition + headerOffset < offsetTop + offsetHeight) {
            setActiveCategory(cat.id);
            const button = document.getElementById(`btn-${cat.id}`);
            if (button) button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data, isManualScroll, activeCategory, showAllergens]);

  if (!data || !data.categorias) return null;

  const accentColor = "text-yellow-400";
  
  const scrollToCategory = (id) => {
    setIsManualScroll(false); 
    setActiveCategory(id);
    
    const element = document.getElementById(id);
    if (element) {
      // Ajuste de altura dependiendo de si los alérgenos están abiertos
      const yOffset = showAllergens ? -380 : -280; 
      
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });

      setTimeout(() => setIsManualScroll(true), 800);
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white font-sans pb-20 transition-all duration-300 ${showAllergens ? 'pt-80' : 'pt-56'}`}>
      
      {/* HEADER */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-gray-900 transition-all duration-300 shadow-xl">
        <div className="relative flex flex-col items-center justify-center px-6 pt-3 pb-2">
          <h1 className="text-xl md:text-3xl font-bold font-serif text-white tracking-widest uppercase text-center mb-1">
            {title}
          </h1>
          <div className="flex flex-col items-center gap-2">
            {showTaxWarning && (
                <p className="text-[10px] md:text-xs text-yellow-400/80 uppercase tracking-widest font-sans font-medium">
                Precios por Ración
                </p>
            )}
            <button 
                onClick={() => setShowAllergens(!showAllergens)}
                className={`text-[10px] px-4 py-1.5 rounded-full border transition-all duration-300 flex items-center gap-2 uppercase tracking-widest mt-1 ${
                    showAllergens 
                    ? 'bg-yellow-400 text-black border-yellow-400 font-bold' 
                    : 'bg-stone-900 text-stone-400 border-stone-700 hover:border-stone-500'
                }`}
            >
                {showAllergens ? <UtensilsCrossed size={12} /> : <Info size={12} />}
                {showAllergens ? 'Ocultar Alérgenos' : 'Ver Alérgenos'}
            </button>
          </div>
        </div>

        {/* LEYENDA */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-stone-900/50 ${showAllergens ? 'max-h-60 opacity-100 border-t border-b border-stone-800' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-2 p-3 text-[9px] md:text-[10px] text-stone-300 max-w-5xl mx-auto">
                {Object.entries(ALLERGEN_CONFIG).filter(([key]) => key !== 'default').map(([key, config]) => (
                    <div key={key} className="flex items-center gap-1.5 justify-center md:justify-start p-1 rounded hover:bg-white/5 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-stone-800 border border-stone-600 flex items-center justify-center text-yellow-500 shrink-0">
                            {config.icon}
                        </div>
                        <span className="uppercase tracking-wide opacity-80 truncate">{config.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* NAVEGACIÓN */}
        <div className="w-full border-t border-gray-900 overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center px-4 py-3 gap-4 min-w-max">
            {data.categorias.map((cat) => (
              <button
                key={cat.id}
                id={`btn-${cat.id}`} 
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

      {/* CONTENIDO */}
      <div className="max-w-4xl mx-auto px-4 space-y-20">
        {data.categorias.map((categoria) => (
          <section key={categoria.id} id={categoria.id} className="scroll-mt-80">
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
                if (!plato.precio) {
                  return (
                    <div key={index} className="col-span-1 md:col-span-2 pt-8 pb-4 text-center">
                      <h3 className="text-xl md:text-2xl font-serif text-yellow-400 border-b border-yellow-400/30 inline-block px-6 pb-2 tracking-widest uppercase">
                        {plato.nombre}
                      </h3>
                      {plato.ingredientes && <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">{plato.ingredientes}</p>}
                    </div>
                  );
                }
                return (
                  <div key={index} className="group relative border-b border-gray-900 pb-3 hover:border-gray-700 transition-colors duration-300">
                    <div className="flex justify-between items-end">
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
                    {showAllergens && plato.alergenos && (
                        <div className="flex gap-2 mt-3 pt-2 border-t border-gray-900/50 animate-fadeIn flex-wrap">
                            {plato.alergenos.map((alergeno, i) => (
                                <AllergenBadge key={i} type={alergeno} />
                            ))}
                        </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      
      {/* FOOTER */}
      <div className="text-center py-20 space-y-3">
        <div className="text-yellow-400 font-serif text-lg tracking-widest">Casa Simón</div>
        <p className="text-gray-500 text-xs uppercase tracking-wider">Calidad y Tradición</p>
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