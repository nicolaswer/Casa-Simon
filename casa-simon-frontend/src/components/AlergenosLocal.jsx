import React from 'react';
import { Helmet } from 'react-helmet-async';
import { parallevarData } from '../data/parallevarData'; // <--- Tu data
import { 
  Wheat, Milk, Egg, Fish, Shell, Nut, Bean, 
  // Iconos visuales
  Info
} from 'lucide-react';

// CONFIGURACIÓN DE COLUMNAS (Mismo orden estándar)
const ALLERGEN_COLUMNS = [
  { id: 'gluten', label: 'Gluten', icon: <Wheat size={16} /> },
  { id: 'crustaceos', label: 'Crustáceos', icon: <span className="font-bold text-[10px]">CRU</span> },
  { id: 'huevos', label: 'Huevo', icon: <Egg size={16} /> },
  { id: 'pescados', label: 'Pescado', icon: <Fish size={16} /> },
  { id: 'cacahuete', label: 'Cacahuetes', icon: <Nut size={16} /> },
  { id: 'soja', label: 'Soja', icon: <Bean size={16} /> },
  { id: 'leche', label: 'Lácteos', icon: <Milk size={16} /> },
  { id: 'fruto seco', label: 'F. Secos', icon: <span className="font-bold text-[10px]">FRU</span> },
  { id: 'apio', label: 'Apio', icon: <span className="font-bold text-[10px]">API</span> },
  { id: 'mostaza', label: 'Mostaza', icon: <span className="font-bold text-[10px]">MZ</span> },
  { id: 'sesamo', label: 'Sésamo', icon: <span className="font-bold text-[10px]">SES</span> },
  { id: 'sulfito', label: 'Sulfitos', icon: <span className="font-bold text-[10px]">SO2</span> },
  { id: 'altramuces', label: 'Altramuz', icon: <span className="font-bold text-[10px]">ALT</span> },
  { id: 'moluscos', label: 'Moluscos', icon: <Shell size={16} /> },
];

const AlergenosParallevar = () => {
  return (
    <>
      <Helmet>
        <title>Alérgenos Comidas Para Llevar | Casa Simón</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif text-yellow-400 text-center mb-2">
            Matriz de Alérgenos
          </h1>
          <p className="text-gray-400 text-center mb-10">
            Sección: Comidas Para Llevar (Vitrina y Encargos)
          </p>

          {/* --- TABLA CON SCROLL CONTROLADO --- */}
          {/* Añadido max-h-[70vh] para que el sticky vertical funcione dentro de la caja */}
          <div className="overflow-x-auto border border-gray-800 rounded-xl shadow-2xl bg-stone-900/50 max-h-[70vh]">
            <table className="w-full text-sm text-left border-collapse">
              
              {/* CABECERA */}
              <thead className="text-xs text-gray-400 uppercase bg-black border-b border-gray-700">
                <tr>
                  {/* ESQUINA SUPERIOR IZQUIERDA (FIJA EN AMBOS EJES) */}
                  <th scope="col" className="px-6 py-4 sticky left-0 top-0 z-30 bg-black border-r border-gray-800 min-w-[200px] shadow-[2px_2px_10px_rgba(0,0,0,0.5)]">
                    Producto
                  </th>
                  
                  {/* ICONOS ALÉRGENOS (FIJOS ARRIBA) */}
                  {ALLERGEN_COLUMNS.map((col) => (
                    <th key={col.id} scope="col" className="px-2 py-4 text-center min-w-[60px] border-r border-gray-800/50 sticky top-0 z-20 bg-black">
                      <div className="flex flex-col items-center gap-1 group cursor-help" title={col.label}>
                        <div className="text-yellow-500">{col.icon}</div>
                        {/* Texto vertical en móvil, horizontal en PC */}
                        <span className="md:hidden -rotate-90 text-[9px] mt-2 w-4">{col.label.substring(0,3)}</span>
                        <span className="hidden md:block text-[9px] tracking-wider mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                            {col.label}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* CUERPO */}
              <tbody>
                {parallevarData.categorias.map((categoria) => (
                  <React.Fragment key={categoria.id}>
                    
                    {/* NOMBRE CATEGORÍA (Fija a la izquierda) */}
                    <tr className="bg-stone-800 border-y border-gray-600">
                      <td colSpan={15} className="px-6 py-3 font-bold text-yellow-400 uppercase tracking-widest text-xs sticky left-0 z-10 bg-stone-800">
                        {categoria.nombre}
                      </td>
                    </tr>

                    {/* PLATOS */}
                    {categoria.platos.map((plato, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                        {/* NOMBRE PLATO (Fija a la izquierda) */}
                        <td className="px-6 py-3 font-medium text-gray-200 sticky left-0 bg-stone-900 border-r border-gray-800 z-10">
                          {plato.nombre}
                        </td>

                        {ALLERGEN_COLUMNS.map((col) => {
                          const hasAllergen = plato.alergenos && plato.alergenos.includes(col.id);
                          return (
                            <td key={col.id} className="px-2 py-3 text-center border-r border-gray-800/30">
                              {hasAllergen ? (
                                <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></span>
                              ) : (
                                <span className="text-gray-800 text-[10px]">•</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-xs text-gray-500 text-center">
            <p>● El punto dorado indica presencia del alérgeno.</p>
            <p>Casa Simón - Información de Alérgenos basada en Reglamento (UE) 1169/2011</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default AlergenosParallevar;