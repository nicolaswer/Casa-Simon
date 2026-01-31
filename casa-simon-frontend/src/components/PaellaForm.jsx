import React, { useState } from 'react';
import { Users, MapPin, Phone, Clock, User, ArrowLeft, Calendar as CalendarIcon, Utensils, Home, Hash, MessageSquare, AlertCircle, PlusCircle, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { enviarPedidoPaella } from './paellaService';

// IMPORTACIÓN DE LOS DATOS DE LA CARTA
import { paellasDomicilioData } from '../data/paellasDomicilioData';

// Configuración de Calendario
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import './.css/datepicker-custom.css';

registerLocale('es', es);

// EXTRACCIÓN DINÁMICA DE PAELLAS DESDE EL JSON
const categoriaPaellas = paellasDomicilioData.categorias.find(cat => cat.id === "paellas");
const TIPOS_PAELLA = categoriaPaellas ? categoriaPaellas.platos.map(p => p.nombre) : [];

// --- SUB-COMPONENTE: ITEM DE PAELLA ---
const PaellaItemForm = ({ index, data, onChange, error }) => {
  return (
    <div className={`bg-stone-800/30 border ${error ? 'border-red-500' : 'border-stone-800'} p-6 rounded-xl space-y-4 mb-4 transition-colors`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${error ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'}`}>
          {index + 1}
        </div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-stone-300">Configuración de Paella</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="space-y-2">
          <label className="text-[10px] text-stone-500 uppercase font-bold flex items-center gap-2">
            <Utensils size={12} className="text-yellow-500"/> Variedad
          </label>
          <select 
            value={data.tipo} 
            onChange={(e) => onChange(index, 'tipo', e.target.value)}
            className="w-full bg-stone-900/50 border-b border-stone-700 p-3 text-xs text-white focus:outline-none focus:border-yellow-500"
          >
            {TIPOS_PAELLA.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] text-stone-500 uppercase font-bold flex items-center gap-2">
            <Users size={12} className="text-yellow-500"/> Raciones
          </label>
          <input 
            type="number"
            value={data.raciones} 
            onChange={(e) => onChange(index, 'raciones', e.target.value)}
            className={`w-full bg-stone-900/50 border-b ${error ? 'border-red-500' : 'border-stone-700'} p-3 text-sm text-white focus:outline-none focus:border-yellow-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} 
          />
          {error && (
            <p className="text-red-500 text-[10px] mt-1 font-bold italic animate-pulse">
              La cantidad de raciones no puede ser inferior a 1
            </p>
          )}
        </div>
      </div>
      <div className="space-y-2 text-left">
        <label className="text-[10px] text-stone-500 uppercase font-bold flex items-center gap-2">
          <MessageSquare size={12} className="text-yellow-500"/> Notas específicas
        </label>
        <textarea 
          value={data.modificaciones} 
          onChange={(e) => onChange(index, 'modificaciones', e.target.value)}
          placeholder="Ej: Socarrat extra, sin pimiento..."
          className="w-full bg-stone-900/50 border border-stone-700 p-3 text-xs text-white focus:outline-none focus:border-yellow-500 rounded-lg resize-none h-16"
        />
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
const PaellaForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [errors, setErrors] = useState({});
  
  const [personalData, setPersonalData] = useState({
    nombre: '', calle: '', numero: '', piso: '', telefono: '', timbre: '', hora: ''
  });

  const [paellas, setPaellas] = useState([
    { tipo: TIPOS_PAELLA[0], raciones: '2', modificaciones: '' }
  ]);

  const handleNumTiposChange = (n) => {
    const num = Math.min(Math.max(1, parseInt(n) || 1), TIPOS_PAELLA.length);
    let newPaellas = [...paellas];
    if (num > paellas.length) {
      for (let i = paellas.length; i < num; i++) {
        newPaellas.push({ tipo: TIPOS_PAELLA[i] || TIPOS_PAELLA[0], raciones: '2', modificaciones: '' });
      }
    } else {
      newPaellas = newPaellas.slice(0, num);
    }
    setPaellas(newPaellas);
  };

  const handlePaellaChange = (index, field, value) => {
    const updated = [...paellas];
    updated[index][field] = value;
    setPaellas(updated);
  };

  const isWeekday = (date) => date.getDay() !== 1;

  const generateTimeOptions = () => {
    const options = [];
    const now = new Date();
    const isToday = startDate && startDate.toDateString() === now.toDateString();
    const minTimeAllowed = new Date(now.getTime() + 30 * 60000);

    let h = 13, m = 0;
    while (h < 16 || (h === 16 && m <= 30)) {
      const label = `${h}:${m === 0 ? '00' : m}`;
      if (isToday) {
        const optionTime = new Date(now);
        optionTime.setHours(h, m, 0, 0);
        if (optionTime >= minTimeAllowed) options.push(label);
      } else {
        options.push(label);
      }
      m += 15; if (m === 60) { h++; m = 0; }
    }
    return options;
  };

  const validate = () => {
    const err = {};
    const phoneClean = personalData.telefono.replace(/\s+/g, '');

    if (!personalData.nombre.trim()) err.nombre = 'Obligatorio';
    if (!/^\d{9}$/.test(phoneClean)) err.telefono = 'Número no válido';
    if (!personalData.calle.trim()) err.calle = 'Indique calle';
    if (!personalData.numero.trim()) err.numero = 'Nº obligatorio';
    if (!startDate) err.fecha = 'Elija día';
    if (!personalData.hora) err.hora = 'Elija hora';

    paellas.forEach((p, index) => {
      if (!p.raciones || parseInt(p.raciones) < 1) {
        err[`paella_${index}`] = true;
      }
    });

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true);
      try {
        await enviarPedidoPaella({ ...personalData, paellas }, startDate);
        setPersonalData({ nombre: '', calle: '', numero: '', piso: '', telefono: '', timbre: '', hora: '' });
        setPaellas([{ tipo: TIPOS_PAELLA[0], raciones: '2', modificaciones: '' }]);
        setStartDate(null);
      } catch (err) {
        alert("Error al procesar pedido.");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-10 pb-20 px-4 font-sans text-left">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-yellow-500 mb-8 uppercase text-[10px] font-bold tracking-widest transition-colors">
          <ArrowLeft size={16} /> Volver a la carta
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-yellow-500 font-bold uppercase tracking-[0.2em] mb-2">Paellas a Domicilio</h1>
          <p className="text-stone-400 text-xs uppercase tracking-widest italic">Casa Simón • Registro de Pedido</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-stone-900/50 border border-stone-800 p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-sm space-y-10">
          
          <div className="space-y-6">
            <h2 className="text-yellow-500 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <User size={14}/> 1. Información de Entrega
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1 text-left">
                <label className="text-[10px] text-stone-500 uppercase font-bold ml-1">Nombre Completo</label>
                <input type="text" value={personalData.nombre} onChange={(e) => setPersonalData({...personalData, nombre: e.target.value})} className={`w-full bg-stone-800/50 border-b ${errors.nombre ? 'border-red-500' : 'border-stone-700'} p-3 text-sm text-white focus:outline-none focus:border-yellow-500 transition-all`} />
              </div>
              <div className="space-y-1 text-left">
                <label className="text-[10px] text-stone-500 uppercase font-bold ml-1">Teléfono Móvil</label>
                <input type="text" value={personalData.telefono} onChange={(e) => setPersonalData({...personalData, telefono: e.target.value})} className={`w-full bg-stone-800/50 border-b ${errors.telefono ? 'border-red-500' : 'border-stone-700'} p-3 text-sm text-white focus:outline-none focus:border-yellow-500 transition-all`} />
                {errors.telefono && <p className="text-red-500 text-[9px] mt-1 font-bold italic">{errors.telefono}</p>}
              </div>

              {/* DIRECCIÓN SEPARADA */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] text-stone-500 uppercase font-bold ml-1 flex items-center gap-1"><MapPin size={10}/> Calle / Avenida</label>
                  <input type="text" value={personalData.calle} onChange={(e) => setPersonalData({...personalData, calle: e.target.value})} className={`w-full bg-stone-800/50 border-b ${errors.calle ? 'border-red-500' : 'border-stone-700'} p-3 text-sm text-white focus:outline-none focus:border-yellow-500 transition-all`} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-stone-500 uppercase font-bold ml-1 flex items-center gap-1"><Hash size={10}/> Nº</label>
                  <input type="text" value={personalData.numero} onChange={(e) => setPersonalData({...personalData, numero: e.target.value})} className={`w-full bg-stone-800/50 border-b ${errors.numero ? 'border-red-500' : 'border-stone-700'} p-3 text-sm text-white focus:outline-none focus:border-yellow-500 transition-all`} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-stone-500 uppercase font-bold ml-1 flex items-center gap-1"><Building size={10}/> Piso / Letra</label>
                  <input type="text" value={personalData.piso} onChange={(e) => setPersonalData({...personalData, piso: e.target.value})} className="w-full bg-stone-800/50 border-b border-stone-700 p-3 text-sm text-white focus:outline-none focus:border-yellow-500 transition-all" placeholder="Ej: 2ºB" />
                </div>
              </div>

              <div className="md:col-span-2 space-y-1 text-left">
                <label className="text-[10px] text-stone-500 uppercase font-bold ml-1">Notas de Entrega (Timbre, portero...)</label>
                <input type="text" value={personalData.timbre} onChange={(e) => setPersonalData({...personalData, timbre: e.target.value})} className="w-full bg-stone-800/50 border-b border-stone-700 p-3 text-sm text-white focus:outline-none focus:border-yellow-500" placeholder="Ej: Llamar al timbre 4, no funciona el portero..." />
              </div>
            </div>
          </div>

          <hr className="border-stone-800" />

          <div className="space-y-6 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-yellow-500 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 text-left">
                <PlusCircle size={14}/> 2. Detalles del Pedido
              </h2>
              <div className="flex items-center gap-4 bg-stone-800/50 p-2 rounded-lg border border-stone-700">
                <label className="text-[10px] text-stone-400 uppercase font-bold ml-2">¿Cuántas variedades?</label>
                <select value={paellas.length} onChange={(e) => handleNumTiposChange(e.target.value)} className="bg-stone-900 text-yellow-500 font-bold p-1 rounded focus:outline-none">
                  {[...Array(TIPOS_PAELLA.length)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
                </select>
              </div>
            </div>
            <div className="space-y-4">
              {paellas.map((paella, index) => <PaellaItemForm key={index} index={index} data={paella} onChange={handlePaellaChange} error={errors[`paella_${index}`]} />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-left">
            <div className="space-y-2 flex flex-col">
              <label className="text-[10px] text-stone-500 uppercase font-bold flex items-center gap-2">
                <CalendarIcon size={12} className="text-yellow-500"/> Día del pedido
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => { setStartDate(date); setPersonalData({...personalData, hora: ''}); }}
                filterDate={isWeekday}
                minDate={new Date()}
                locale="es"
                placeholderText="Seleccione un día"
                dateFormat="dd/MM/yyyy"
                className={`w-full bg-stone-800/50 border-b ${errors.fecha ? 'border-red-500' : 'border-stone-700'} p-3 text-sm text-white focus:outline-none focus:border-yellow-500 cursor-pointer`}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-stone-500 uppercase font-bold flex items-center gap-2">
                <Clock size={12} className="text-yellow-500"/> Hora de entrega
              </label>
              <select value={personalData.hora} onChange={(e) => setPersonalData({...personalData, hora: e.target.value})} disabled={!startDate} className={`w-full bg-stone-800/50 border-b ${errors.hora ? 'border-red-500' : 'border-stone-700'} p-3 text-xs text-white focus:outline-none focus:border-yellow-500 disabled:opacity-20`}>
                <option value="">{startDate ? 'Elegir hora' : '---'}</option>
                {generateTimeOptions().map(t => <option key={t} value={t} className="bg-stone-900">{t}</option>)}
              </select>
            </div>
          </div>

          <button type="submit" disabled={isSending} className={`w-full bg-yellow-500 text-black font-bold py-5 rounded-lg uppercase tracking-[0.3em] text-sm hover:bg-yellow-400 transition-all shadow-lg active:scale-[0.95] ${isSending ? 'opacity-50' : ''}`}>
            {isSending ? 'Procesando...' : 'Realizar Pedido vía WhatsApp'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaellaForm;