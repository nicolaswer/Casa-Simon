// src/data/restauranteData.js

export const restauranteData = {
  "categorias": [
    {
      "id": "entrantes",
      "nombre": "Entrantes",
      "descripcion": "Para comenzar",
      "platos": [
        { "nombre": "Verdura a la plancha", "precio": "4.50" },
        { "nombre": "Alcachofas en temporada", "precio": "4.50" },
        { "nombre": "Champiñón", "precio": "4.50" },
        { "nombre": "Croquetas de jamón", "precio": "2.00" },
        { "nombre": "Queso frito con mermelada de tomate", "precio": "4.50" },
        { "nombre": "Queso fresco a la plancha", "precio": "4.50" },
        { "nombre": "Calamar nacional a la romana", "precio": "5.00" },
        { "nombre": "Calamar nacional a la plancha", "precio": "5.00" },
        { "nombre": "Sepionet a la plancha", "precio": "5.00" },
        { "nombre": "Pescadito frito", "precio": "4.50" },
        { "nombre": "Jamón Ibérico (Ración)", "precio": "5.00" }, 
        { "nombre": "Pulpo (Ración)", "precio": "18.00" },
        { "nombre": "Mejillones al Vapor", "precio": "4.50" },
        { "nombre": "Marisco hervido o a la plancha", "precio": "S/M ud" }
      ]
    },
    {
      "id": "conservas",
      "nombre": "Conservas",
      "descripcion": "Selección especial",
      "platos": [
        { "nombre": "Berberechos Especiales", "precio": "12.00" },
        { "nombre": "Mejillones", "precio": "12.00" }
      ]
    },
    {
      "id": "ensaladas",
      "nombre": "Ensaladas",
      "descripcion": "Frescas y naturales",
      "platos": [
        { "nombre": "Ensalada Mixta", "precio": "15.00" },
        { "nombre": "Tomate con Capellán", "precio": "15.00" },
        { "nombre": "Tomate con Ventresca", "precio": "15.00" }
      ]
    },
    {
      "id": "paellas",
      "nombre": "Paellas a la Leña",
      "descripcion": "Nuestras especialidades",
      "platos": [
        { "nombre": "Paella de conejo y caracoles", "precio": "15.00" },
        { "nombre": "Paella de pollo de campo y conejo", "precio": "15.00", "ingredientes": "Por encargo. Mínimo 2 personas" },
        { "nombre": "Paella de verdura y magra", "precio": "15.00", "ingredientes": "Por encargo. Mínimo 2 personas" },
        { "nombre": "Paella de verdura", "precio": "15.00", "ingredientes": "Por encargo. Mínimo 2 personas" },
        { "nombre": "Paella a banda", "precio": "15.00", "ingredientes": "Por encargo. Mínimo 2 personas" },
        { "nombre": "Gazpacho con conejo y caracoles", "precio": "15.00" }
      ]
    },
    {
      "id": "carnes",
      "nombre": "Carnes a la Brasa",
      "descripcion": "Al punto de leña",
      "platos": [
        { "nombre": "Chuletas de cordero", "precio": "15.00" },
        { "nombre": "Chuletón de Ternera", "precio": "22.00" },
        { "nombre": "Entrecot de Ternera", "precio": "22.00" },
        { "nombre": "Pechuga o muslo de Pollo", "precio": "13.00" }
      ]
    },
    {
      "id": "pescados",
      "nombre": "Pescados",
      "descripcion": "Del mar a la plancha",
      "platos": [
        { "nombre": "Atún de ijada a la plancha", "precio": "16.00" },
        { "nombre": "Emperador a la plancha", "precio": "15.00" }
      ]
    },
    
    /* --- BODEGA UNIFICADA --- */
    {
      "id": "bodega",
      "nombre": "Bodega",
      "descripcion": "Nuestra selección de Vinos y Cavas",
      "platos": [
        /* --- TINTOS --- */
        { "nombre": "— VINOS TINTOS —", "precio": "", "ingredientes": "Selección de D.O." }, // SEPARADOR VISUAL

        // Rioja
        { "nombre": "Luis Cañas", "precio": "18.00", "ingredientes": "D.O. Rioja" },
        { "nombre": "Campillo", "precio": "17.00", "ingredientes": "D.O. Rioja" },
        { "nombre": "Pergamino", "precio": "14.00", "ingredientes": "D.O. Rioja" },
        { "nombre": "El Coto", "precio": "14.00", "ingredientes": "D.O. Rioja" },
        { "nombre": "Muga", "precio": "27.50", "ingredientes": "D.O. Rioja" },
        { "nombre": "Tierra Murillo", "precio": "14.00", "ingredientes": "D.O. Rioja" },
        { "nombre": "Remelluri", "precio": "30.50", "ingredientes": "D.O. Rioja" },
        { "nombre": "Coto de Imaz", "precio": "16.00", "ingredientes": "D.O. Rioja" },
        
        // Ribera del Duero
        { "nombre": "Arzuaga", "precio": "30.00", "ingredientes": "D.O. Ribera del Duero" },
        { "nombre": "Protos", "precio": "24.50", "ingredientes": "D.O. Ribera del Duero" },
        { "nombre": "Pago de los Capellanes", "precio": "32.00", "ingredientes": "D.O. Ribera del Duero" },
        { "nombre": "Pago de Carraovejas", "precio": "47.00", "ingredientes": "D.O. Ribera del Duero" },
        { "nombre": "Condado de Haza", "precio": "19.50", "ingredientes": "D.O. Ribera del Duero" },
        { "nombre": "Pesquera", "precio": "29.00", "ingredientes": "D.O. Ribera del Duero" },
        { "nombre": "La Planta", "precio": "15.50", "ingredientes": "D.O. Ribera del Duero" },
        { "nombre": "Sentido", "precio": "18.50", "ingredientes": "D.O. Ribera del Duero" },

        // Jumilla y Alicante
        { "nombre": "Juan Gil 18", "precio": "35.00", "ingredientes": "D.O. Jumilla" },
        { "nombre": "Juan Gil", "precio": "18.00", "ingredientes": "D.O. Jumilla" },
        { "nombre": "Merlot E. Mendoza", "precio": "16.00", "ingredientes": "D.O. Alicante" },
        { "nombre": "Tarima Hill", "precio": "18.50", "ingredientes": "D.O. Alicante" },
        { "nombre": "E. Mendoza S. Cabernet", "precio": "17.00", "ingredientes": "D.O. Alicante" },

        /* --- BLANCOS Y ROSADOS --- */
        { "nombre": "— BLANCOS Y ROSADOS —", "precio": "", "ingredientes": "Frescos y Afrutados" }, // SEPARADOR VISUAL

        { "nombre": "Marqués de Riscal (B)", "precio": "15.00", "ingredientes": "Vino Blanco" },
        { "nombre": "Tierra Buena (B)", "precio": "9.00", "ingredientes": "Vino Blanco" },
        { "nombre": "Marina Alta (B)", "precio": "10.00", "ingredientes": "Vino Blanco" },
        { "nombre": "Barbadillo (B)", "precio": "9.50", "ingredientes": "Vino Blanco" },
        { "nombre": "Mateu Rosé (R)", "precio": "9.00", "ingredientes": "Vino Rosado" },
        { "nombre": "Marqués de Riscal (R)", "precio": "14.00", "ingredientes": "Vino Rosado" },
        { "nombre": "Peñascal (R)", "precio": "8.00", "ingredientes": "Vino Rosado" },
        { "nombre": "Gran Feudo Chivite (R)", "precio": "9.00", "ingredientes": "Vino Rosado" },

        /* --- CAVAS, SIDRA Y 3/8 --- */
        { "nombre": "— CAVA, SIDRA Y FORMATO PEQUEÑO —", "precio": "", "ingredientes": "Espumosos y 3/8" }, // SEPARADOR VISUAL

        { "nombre": "Moët & Chandon Rosé", "precio": "70.00", "ingredientes": "Champagne" },
        { "nombre": "Moët & Chandon Imperial", "precio": "52.00", "ingredientes": "Champagne" },
        { "nombre": "Juvé & Camps", "precio": "22.50", "ingredientes": "Cava" },
        { "nombre": "Freixenet Cordón Negro", "precio": "14.00", "ingredientes": "Cava" },
        { "nombre": "Sidra El Gaitero", "precio": "8.00", "ingredientes": "Sidra" },
        { "nombre": "Azpilicueta (3/8)", "precio": "9.50", "ingredientes": "Botella pequeña" },
        { "nombre": "El Coto (3/8)", "precio": "8.50", "ingredientes": "Botella pequeña" },
        { "nombre": "Luis Cañas (1/2 Litro)", "precio": "14.00", "ingredientes": "Botella mediana" },
        { "nombre": "Muga (3/8)", "precio": "17.00", "ingredientes": "Botella pequeña" },
        { "nombre": "Arzuaga (3/8)", "precio": "18.50", "ingredientes": "Botella pequeña" }
      ]
    },
    
    /* --- BEBIDAS Y CAFÉS --- */
    {
      "id": "bebidas",
      "nombre": "Bebidas",
      "descripcion": "Refrescos y Cafetería",
      "platos": [
        { "nombre": "Agua Mineral (Grande)", "precio": "3.50" },
        { "nombre": "Agua Mineral (Pequeña)", "precio": "2.00" },
        { "nombre": "Refrescos", "precio": "2.80", "ingredientes": "Coca-Cola, Fanta, Sprite, Nestea..." },
        { "nombre": "Cerveza (Caña)", "precio": "2.50" },
        { "nombre": "Cerveza (Tercio/Botella)", "precio": "3.00" },
        { "nombre": "Cerveza Sin Alcohol", "precio": "3.00" },
        { "nombre": "Tinto de Verano", "precio": "3.50" },
        { "nombre": "Sangría (Jarra 1L)", "precio": "16.00" },
        { "nombre": "Café Solo / Cortado", "precio": "1.80" },
        { "nombre": "Café con Leche", "precio": "2.00" },
        { "nombre": "Carajillo / Bombón", "precio": "2.50" },
        { "nombre": "Infusiones", "precio": "1.80" }
      ]
    },

    {
      "id": "postres",
      "nombre": "Postres",
      "descripcion": "Caseros y Fruta",
      "platos": [
        { "nombre": "Flan", "precio": "3.50" },
        { "nombre": "Natillas", "precio": "3.50" },
        { "nombre": "Pan de Calatrava", "precio": "3.50" },
        { "nombre": "Arroz con Leche", "precio": "3.50" },
        { "nombre": "Tarta de Queso", "precio": "3.50" },
        { "nombre": "Tarta de Tres Chocolates", "precio": "3.50" },
        { "nombre": "Tarta de Almendras", "precio": "3.50" },
        { "nombre": "Piña Natural", "precio": "3.50" },
        { "nombre": "Sandía (en temporada)", "precio": "3.50" },
        { "nombre": "Melón", "precio": "3.50" },
        { "nombre": "Fresas con Nata (en temporada)", "precio": "3.50" }
      ]
    }
  ]
};