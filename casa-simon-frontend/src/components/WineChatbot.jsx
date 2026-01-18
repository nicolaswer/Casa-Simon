import React, { useState, useEffect, useRef } from 'react';
import { X, Wine, ChevronRight, RotateCcw, Send, Euro } from 'lucide-react';
import { restauranteData } from '../data/restauranteData'; 

const WineChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Cat, 2: Plato, 3: Precio, 4: Rec
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const chatEndRef = useRef(null);

  const botCategories = restauranteData.categorias.filter(cat => 
    ['paellas', 'carnes', 'pescados'].includes(cat.id)
  );

  // Definición de los rangos de precio para los botones
  const priceRanges = [
    { id: 'bajo', label: 'Económico', range: '14€ o menos' },
    { id: 'medio', label: 'Estándar', range: '14€ - 17€' },
    { id: 'alto', label: 'Premium', range: '24€ - 33€' },
    { id: 'exclusivo', label: 'Exclusivo', range: 'Más de 33€' }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setStep(2);
  };

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
    setStep(3);
  };

  const handlePriceClick = (rangeId) => {
    setSelectedPriceRange(rangeId);
    setStep(4);
  };

  const resetChat = () => {
    setStep(1);
    setSelectedCategory(null);
    setSelectedDish(null);
    setSelectedPriceRange(null);
  };

  const toggleChat = () => {
    if (isOpen) resetChat();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [step, selectedCategory, selectedPriceRange]);

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-yellow-500 text-stone-900 p-4 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-all"
      >
        {isOpen ? <X size={24} /> : <Wine size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-87.5 h-130 bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          <div className="bg-stone-800 px-5 py-4 flex justify-between items-center border-b border-stone-700">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-900 rounded-lg border border-yellow-500/20">
                <Wine className="text-yellow-500 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-yellow-500 font-bold tracking-widest text-xs uppercase">Sommelier Virtual</h3>
                <p className="text-[10px] text-stone-400 uppercase">Casa Simón</p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-stone-500 hover:text-white"><X size={18} /></button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 custom-scrollbar bg-stone-900/50">
            
            <div className="bg-stone-800 text-stone-200 px-4 py-3 rounded-2xl rounded-tl-none border border-stone-700 text-sm">
              ¡Hola! ¿Qué tiene pensado comer hoy? Le ayudaré a elegir el vino perfecto según su presupuesto.
            </div>

            {/* PASO 1: Categorías */}
            <div className="flex flex-col gap-2">
              {botCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  disabled={step > 1}
                  className={`flex justify-between items-center px-4 py-3 rounded-xl border transition-all text-sm ${
                    selectedCategory?.id === cat.id ? 'bg-yellow-500 text-stone-950 border-yellow-500 font-bold' : 'bg-stone-950/50 text-stone-400 border-stone-800 hover:border-yellow-500/50 hover:text-yellow-500'
                  }`}
                >
                  {cat.nombre}
                </button>
              ))}
            </div>

            {/* PASO 2: Platos */}
            {step >= 2 && selectedCategory && (
              <div className="flex flex-col gap-2 animate-in fade-in">
                <div className="bg-stone-800 text-stone-200 px-4 py-3 rounded-2xl rounded-tl-none border border-stone-700 text-sm italic">
                  ¿Qué plato de <span className="text-yellow-500 font-bold">{selectedCategory.nombre}</span> va a pedir?
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {selectedCategory.platos
                    .filter(plato => plato.recomendaciones_precio) // Filtramos por el nuevo campo
                    .map((plato, index) => (
                    <button
                      key={index}
                      onClick={() => handleDishClick(plato)}
                      disabled={step > 2}
                      className={`text-left px-4 py-2.5 rounded-lg border text-xs transition-all ${
                        selectedDish?.nombre === plato.nombre ? 'bg-stone-700 text-yellow-500 border-yellow-500' : 'bg-stone-950/30 text-stone-400 border-stone-800 hover:border-stone-600'
                      }`}
                    >
                      {plato.nombre}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PASO 3: Selección de Presupuesto */}
            {step >= 3 && selectedDish && (
              <div className="flex flex-col gap-2 animate-in fade-in">
                <div className="bg-stone-800 text-stone-200 px-4 py-3 rounded-2xl rounded-tl-none border border-stone-700 text-sm">
                  ¿Qué presupuesto aproximado tiene para el vino?
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => handlePriceClick(range.id)}
                      disabled={step > 3}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                        selectedPriceRange === range.id 
                        ? 'bg-stone-700 text-yellow-500 border-yellow-500 font-bold shadow-lg' 
                        : 'bg-stone-950/50 text-stone-400 border-stone-800 hover:border-yellow-500/30'
                      }`}
                    >
                      <span className="text-[11px] uppercase tracking-tighter">{range.label}</span>
                      <span className="text-[9px] opacity-60 italic">{range.range}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PASO 4: Recomendación Final */}
            {step === 4 && selectedPriceRange && (
              <div className="mt-2 p-4 bg-stone-800 rounded-2xl border border-yellow-500/30 animate-in zoom-in-95 duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Euro className="text-yellow-500 w-4 h-4" />
                  <span className="text-[10px] uppercase font-bold text-yellow-500 tracking-wider">Recomendación Personalizada</span>
                </div>
                <p className="text-stone-200 text-sm leading-relaxed italic">
                  Para su <span className="text-white font-bold">{selectedDish.nombre}</span>, le recomiendo {selectedDish.recomendaciones_precio[selectedPriceRange]}
                </p>
                <button 
                  onClick={resetChat}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2 text-[10px] uppercase font-bold text-stone-400 hover:text-white transition-colors border-t border-stone-700 pt-3"
                >
                  <RotateCcw size={12} /> Nueva Consulta
                </button>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-stone-800 border-t border-stone-700">
            <div className="relative flex items-center opacity-40">
              <input disabled type="text" placeholder="Selección asistida..." className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-xs" />
              <Send size={16} className="absolute right-4" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WineChatbot;