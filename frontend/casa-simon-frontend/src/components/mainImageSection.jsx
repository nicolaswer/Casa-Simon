import React from 'react';

function Mainimagesection() {
  const restauranteNombre = "Casa Simón";
  // Puedes reemplazar esta URL por una imagen real de tu restaurante
  const imageUrl = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/77/55/05/casa-simon.jpg?w=1100&h=1100&s=1";
  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KJgj9R9wHiqX8x3tNhN_klwSkr_E4P-RsA&s"
  // URL de una imagen aleatoria de comida/restaurante

  return (
    <section 
      className="relative w-full h-[700px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay para oscurecer la imagen y mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Contenido centrado: Logo y Nombre */}
      <div className="mb-4 flex flex-col items-center">
          <img
            src={logoUrl} 
            alt="Logo del Restaurante" 
            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg opacity-50"
          />
        
        {/* Nombre del restaurante */}
        <h2 className="text-6xl font-extrabold tracking-wide drop-shadow-lg opacity-90">
          {restauranteNombre}
        </h2>
      </div>
    </section>
  );
}

export default Mainimagesection;