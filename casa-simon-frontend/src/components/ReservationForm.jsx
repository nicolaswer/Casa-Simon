import React, { useState } from 'react';
import { Users, MapPin, Phone, Clock, Baby, User, ArrowLeft, Calendar as CalendarIcon, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Configuración de Calendario
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import './.css/datepicker-custom.css';

registerLocale('es', es);

const ReservationPage = () => {
  
  // --- LÓGICA DE TIEMPO Y FECHAS ---
  
  const getTodayString = (date = new Date()) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const isAfterLimit = () => {
    const now = new Date();
    // Límite 15:30
    return now.getHours() > 15 || (now.getHours() === 15 && now.getMinutes() > 30);
  };

  // Función para deshabilitar Lunes
  const isWeekday = (date) => {
    return date.getDay() !== 1;
  };

  // --- ESTADOS ---
  const [startDate, setStartDate] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    lugar: 'Terraza',
    personas: '',
    hora: '',
    sillaBebe: false
  });
  const [errors, setErrors] = useState({});

  // --- GENERACIÓN DE HORAS ---
  const generateTimeOptions = () => {
    const options = [];
    const now = new Date();
    const isTodaySelected = startDate && getTodayString(startDate) === getTodayString(now);
    
    let h = 12, m = 30;

    // Rango hasta las 15:30
    while (h < 15 || (h === 15 && m <= 30)) {
      const timeLabel = `${h}:${m === 0 ? '00' : m}`;
      
      if (isTodaySelected) {
        if (h > now.getHours() || (h === now.getHours() && m > now.getMinutes())) {
          options.push(timeLabel);
        }
      } else {
        options.push(timeLabel);
      }

      m += 15;
      if (m === 60) { h += 1; m = 0; }
    }
    return options;
  };

  // --- VALIDACIÓN ---
  const validate = () => {
    const newErrors = {};
    const phoneClean = formData.telefono.replace(/\s+/g, '');
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    
    if (!/^\d{9}$/.test(phoneClean)) {
      newErrors.telefono = 'El número de teléfono no es válido.';
    }

    if (!startDate) {
      newErrors.fecha = 'Seleccione un día.';
    }

    if (!formData.hora) {
      newErrors.hora = 'Debe elegir una hora.';
    }

    if (!formData.personas || formData.personas < 1) {
      newErrors.personas = 'Indique el número de personas.';
    } else if (formData.personas > 6) {
      newErrors.personas = 'Máximo 6 personas por web.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Solicitud de reserva enviada correctamente.");
      formData.telefono = formData.telefono.replaceAll(' ', '');
      console.log("Datos:", { ...formData, fecha: startDate });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-10 pb-20 px-4 font-sans text-left">
      <div className="max-w-2xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-yellow-500 font-bold uppercase tracking-[0.2em] mb-2">Reservar Mesa</h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-stone-800"></div>
            <p className="text-stone-400 text-xs uppercase tracking-widest">Casa Simón • Registro de Reserva</p>
            <div className="h-px w-12 bg-stone-800"></div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-stone-900/50 border border-stone-800 p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-sm">
          <form className="space-y-8" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Nombre */}
              <div className="space-y-2">
                <label className="text-[10px] text-stone-500 uppercase font-bold ml-1 flex items-center gap-2">
                  <User size={12} className="text-yellow-500"/> Nombre y Apellido
                </label>
                <input 
                  type="text" 
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className={`w-full bg-stone-800/50 border-b ${errors.nombre ? 'border-red-500' : 'border-stone-700'} p-3 text-sm text-white focus:outline-none focus:border-yellow-500 transition-all`} 
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <label className="text-[10px] text-stone-500 uppercase font-bold ml-1 flex items-center gap-2">
                  <Phone size={12} className="text-yellow-500"/> Teléfono
                </label>
                <input 
                  type="text" 
                  value={formData.telefono}
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  className={`w-full bg-stone-800/50 border-b ${errors.telefono ? 'border-red-500' : 'border-stone-700'} p-3 text-sm text-white focus:outline-none focus:border-yellow-500 transition-all`} 
                />
                {errors.telefono && <p className="text-red-500 text-[10px] mt-1 italic font-bold tracking-tight">{errors.telefono}</p>}
              </div>

              {/* Calendario React-DatePicker */}
              <div className="space-y-2 flex flex-col">
                <label className="text-[10px] text-stone-500 uppercase font-bold ml-1 flex items-center gap-2 mb-1">
                  <CalendarIcon size={12} className="text-yellow-500"/> Día de la reserva
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => { setStartDate(date); setFormData({...formData, hora: ''}); }}
                  filterDate={isWeekday}
                  minDate={isAfterLimit() ? new Date(new Date().setDate(new Date().getDate() + 1)) : new Date()}
                  locale="es"
                  placeholderText="Seleccione un día"
                  dateFormat="dd/MM/yyyy"
                  className={`w-full bg-stone-800/50 border-b ${errors.fecha ? 'border-red-500' : 'border-stone-700'} p-3 text-sm text-white focus:outline-none focus:border-yellow-500 cursor-pointer`}
                />
                {errors.fecha && <p className="text-red-500 text-[10px] mt-1 italic font-bold">{errors.fecha}</p>}
              </div>

              {/* Hora */}
              <div className="space-y-2">
                <label className="text-[10px] text-stone-500 uppercase font-bold ml-1 flex items-center gap-2">
                  <Clock size={12} className="text-yellow-500"/> Hora disponible
                </label>
                <select 
                  value={formData.hora}
                  onChange={(e) => setFormData({...formData, hora: e.target.value})}
                  disabled={!startDate}
                  className={`w-full bg-stone-800/50 border-b ${errors.hora ? 'border-red-500' : 'border-stone-700'} p-3 text-xs text-white focus:outline-none focus:border-yellow-500 disabled:opacity-20 cursor-pointer`}
                >
                  <option value="">{startDate ? 'Seleccionar hora' : 'Elija un día primero'}</option>
                  {generateTimeOptions().map((t) => (
                    <option key={t} value={t} className="bg-stone-900">{t}</option>
                  ))}
                </select>
              </div>

              {/* Nº Personas */}
              <div className="space-y-2">
                <label className="text-[10px] text-stone-500 uppercase font-bold ml-1 flex items-center gap-2">
                  <Users size={12} className="text-yellow-500"/> Nº de comensales (Máx. 6)
                </label>
                <input 
                  type="number" 
                  value={formData.personas}
                  onChange={(e) => setFormData({...formData, personas: e.target.value})}
                  className={`w-full bg-stone-800/50 border-b ${errors.personas ? 'border-red-500' : 'border-stone-700'} p-3 text-sm text-white focus:outline-none focus:border-yellow-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} 
                />
                {errors.personas && <p className="text-red-500 text-[10px] mt-1 italic font-bold">{errors.personas}</p>}
              </div>

              {/* Lugar */}
              <div className="space-y-2">
                <label className="text-[10px] text-stone-500 uppercase font-bold ml-1 flex items-center gap-2">
                  <MapPin size={12} className="text-yellow-500"/> Ubicación
                </label>
                <select 
                  value={formData.lugar}
                  onChange={(e) => setFormData({...formData, lugar: e.target.value})}
                  className="w-full bg-stone-800/50 border-b border-stone-700 p-3 text-xs text-white focus:outline-none focus:border-yellow-500"
                >
                  <option>Terraza</option>
                  <option>Terraza acristalada</option>
                  <option>Salón interior</option>
                </select>
              </div>

              {/* Silla Bebe */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 p-4 bg-stone-800/30 rounded-lg border border-stone-800">
                  <input 
                    type="checkbox" 
                    id="baby-chair" 
                    checked={formData.sillaBebe}
                    onChange={(e) => setFormData({...formData, sillaBebe: e.target.checked})}
                    className="w-5 h-5 accent-yellow-500" 
                  />
                  <label htmlFor="baby-chair" className="text-xs text-stone-300 flex items-center gap-3 cursor-pointer select-none">
                    <Baby size={18} className="text-yellow-500" /> Necesito silla para bebé
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-5 rounded-lg uppercase tracking-[0.3em] text-sm hover:bg-yellow-400 transition-all shadow-lg active:scale-[0.99]">
                Confirmar Reserva
              </button>
              
              {/* Aviso Grupos Grandes */}
              <div className="flex items-start gap-3 p-4 bg-stone-800/20 border border-stone-800 rounded-lg">
                <AlertCircle size={18} className="text-yellow-500 shrink-0 mt-0.5" />
                <p className="text-[11px] text-stone-400 text-left leading-relaxed italic">
                  Para reservas de <span className="text-yellow-500 font-bold">más de 6 comensales</span>, por favor, póngase en contacto con nosotros directamente vía telefónica para asegurar la mejor disposición de su mesa.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;