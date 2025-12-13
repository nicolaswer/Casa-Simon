// src/data/restauranteData.js

//"alergenos": ["gluten", "leche", "huevos"] (Example of how to add allergens if needed in the future)


export const restauranteData = {
  "categorias": [
    {
      "id": "entrantes",
      "nombre": "Entrantes",
      "descripcion": "Para comenzar",
      "platos": [
        { "nombre": "Verdura a la plancha", "precio": "4.55" },
        { "nombre": "Alcachofas en temporada", "precio": "4.55" },
        { "nombre": "Champiñón", "precio": "4.55" },
        { "nombre": "Jamón Ibérico (Ración)", "precio": "15.15" }, 
        // Croquetas: Gluten/Leche/Huevo (Estándar bechamel y rebozado)
        { "nombre": "Croquetas de jamón", "precio": "2.00", "alergenos": ["gluten", "leche", "huevos"] },
        // Queso frito: Gluten según matriz + Leche
        { "nombre": "Queso frito con mermelada de tomate", "precio": "4.55", "alergenos": ["gluten", "leche"] },
        { "nombre": "Queso fresco a la plancha", "precio": "4.55", "alergenos": ["leche"] },
        // Calamar romana: Rebozado (Gluten) + Molusco
        { "nombre": "Calamar nacional a la romana", "precio": "5.05", "alergenos": ["gluten", "moluscos", "huevos"] },
        { "nombre": "Calamar nacional a la plancha", "precio": "5.05", "alergenos": ["moluscos"] },
        { "nombre": "Pescadito frito", "precio": "5.05", "alergenos": ["pescados", "gluten"] },
        { "nombre": "Pulpo", "precio": "18.20", "alergenos": ["moluscos"] },
        { "nombre": "Mejillones al Vapor", "precio": "4.55", "alergenos": ["moluscos"] },
      ]
    },
    {
      "id": "picoteo",
      "nombre": "Picoteo",
      "descripcion": "Selección especial",
      "platos": [
        { "nombre": "Berberechos Especiales", "precio": "12.10", "alergenos": ["moluscos"] },
        { "nombre": "Mejillones", "precio": "12.10", "alergenos": ["moluscos"] },
        { "nombre": "Patatas de Bolsa", "precio": "2.50", "alergenos": ["gluten"] },
        { "nombre": "Olivas", "precio": "1.50", "alergenos": [] },
        { "nombre": "Almendras Fritas", "precio": "1.50", "alergenos": ["fruto seco"] },
        { "nombre": "Pan tostado", "precio": "2.00", "alergenos": ["gluten"] },
      ]
    },
    {
      "id": "ensaladas",
      "nombre": "Ensaladas",
      "descripcion": "Frescas y naturales",
      "platos": [
        // Ensalada Mixta: Pescado (Atún) según matriz
        { "nombre": "Ensalada Mixta", "precio": "15.00", "alergenos": ["pescados"] },
        // Capellán: Pescado según matriz
        { "nombre": "Tomate con Capellán", "precio": "15.15", "alergenos": ["pescados"] },
        { "nombre": "Tomate con Ventresca", "precio": "15.15", "alergenos": ["pescados"] }
      ]
    },
    {
      "id": "paellas",
      "nombre": "Paellas a la Leña",
      "descripcion": "Nuestras especialidades",
      "platos": [
        { "nombre": "Paella de conejo y caracoles", "precio": "15.15" },
        { "nombre": "Paella de pollo de campo y conejo", "precio": "15.15" },
        { "nombre": "Paella de verdura y magra", "precio": "15.15" },
        { "nombre": "Paella de verdura", "precio": "15.15" },
        // A banda: Crustáceos, Moluscos, Pescados (según 'Paella Moluscos' de matriz)
        { "nombre": "Paella a banda", "precio": "15.15", "alergenos": ["crustaceos", "moluscos", "pescados"] },
        // Gazpacho: Gluten según matriz
        { "nombre": "Gazpacho con conejo y caracoles", "precio": "15.15", "alergenos": ["gluten"] }
      ]
    },
    {
      "id": "carnes",
      "nombre": "Carnes a la Brasa",
      "descripcion": "Al punto de leña",
      "platos": [
        // Cordero Brasa: Sulfitos según matriz
        { "nombre": "Chuletas de cordero", "precio": "15.15", "alergenos": ["sulfito"] },
        { "nombre": "Chuletón de Ternera", "precio": "25.25" },
        { "nombre": "Entrecot de Ternera", "precio": "25.25" },
        { "nombre": "Pechuga o muslo de Pollo", "precio": "15.15" },
        { "nombre": "Huevo", "precio": "1.50", "alergenos": ["huevos"] }

      ]
    },
    {
      "id": "pescados",
      "nombre": "Pescados",
      "descripcion": "Del mar a la plancha",
      "platos": [
        { "nombre": "Emperador a la plancha", "precio": "14.45", "alergenos": ["pescados"] },
        { "nombre": "Merluza a la plancha", "precio": "15.15", "alergenos": ["pescados"] },
        { "nombre": "Atun ijada a la plancha", "precio": "15.15", "alergenos": ["pescados"] },
      ]
    },
    {
      "id": "postres",
      "nombre": "Postres",
      "descripcion": "Caseros y Fruta",
      "platos": [
        { "nombre": "Flan", "precio": "3.55", "alergenos": ["huevos", "leche"] },
        // Natillas a menudo llevan galleta (gluten)
        { "nombre": "Natillas", "precio": "3.55", "alergenos": ["huevos", "leche", "gluten"] },
        { "nombre": "Pan de Calatrava", "precio": "3.55", "alergenos": ["huevos", "leche", "gluten"] },
        { "nombre": "Arroz con Leche", "precio": "3.55", "alergenos": ["leche"] },
        { "nombre": "Tarta de Queso", "precio": "3.55", "alergenos": ["leche", "huevos", "gluten"] },
        { "nombre": "Tarta de Tres Chocolates", "precio": "3.55", "alergenos": ["leche", "soja"] },
        { "nombre": "Tarta de Almendras", "precio": "3.55", "alergenos": ["fruto seco", "huevos"] },
        { "nombre": "Fresas con Nata (en temporada)", "precio": "3.55", "alergenos": ["leche"] },
        { "nombre": "Piña Natural", "precio": "3.55" },
        { "nombre": "Sandía (en temporada)", "precio": "3.55" },
        { "nombre": "Melón", "precio": "3.55" }
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
        //{ "nombre": "Tierra Murillo", "precio": "14.00", "ingredientes": "D.O. Rioja" },
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
      "descripcion": "Refrescos, Cervezas y Cafetería",
      "platos": [
        // --- AGUAS Y REFRESCOS ---
        { "nombre": "Agua Pequeña", "precio": "1.65" },
        { "nombre": "Agua Grande Plástico", "precio": "3.05", "ingredientes": "Solán de Cabras" },
        { "nombre": "Agua Grande Cristal", "precio": "3.35", "ingredientes": "Solán de Cabras" },
        { "nombre": "Casera Pequeña Cristal", "precio": "3.80" },
        { "nombre": "Casera Grande", "precio": "3.35" },
        { "nombre": "Refrescos", "precio": "2.50", "ingredientes": "Coca-Cola, Aquarius, Nestea, Fanta..." },

        // --- CERVEZAS ---
        { "nombre": "Caña", "precio": "2.50", "alergenos": ["gluten"] },
        { "nombre": "Clara de Limón", "precio": "2.75", "alergenos": ["gluten"] },
        { "nombre": "Tanque", "precio": "3.00", "alergenos": ["gluten"] },
        { "nombre": "Heineken", "precio": "2.50", "alergenos": ["gluten"] },
        { "nombre": "Mahou", "precio": "2.80", "alergenos": ["gluten"] },
        { "nombre": "Alhambra", "precio": "3.00", "alergenos": ["gluten"] },
        { "nombre": "Litro de Cerveza", "precio": "3.85", "alergenos": ["gluten"] },
        { "nombre": "Jarra de Cerveza", "precio": "4.40", "alergenos": ["gluten"] },

        // --- VINOS Y SANGRÍA ---
        { "nombre": "Copa Vino Tinto", "precio": "3.50", "ingredientes": "Vino de la Casa", "alergenos": ["sulfito"] },
        { "nombre": "Copa Vino Blanco", "precio": "3.50", "ingredientes": "Vino de la Casa", "alergenos": ["sulfito"] },
        { "nombre": "Tinto de Verano", "precio": "2.80", "alergenos": ["sulfito"] },
        { "nombre": "Jarra de Vino", "precio": "3.90", "alergenos": ["sulfito"] },
        { "nombre": "Sangría", "precio": "7.10", "alergenos": ["sulfito"] },

        // --- CAFETERÍA ---
        { "nombre": "Cafés", "precio": "1.50", "ingredientes": "Solo, Cortado, con Leche, Bombón...", "alergenos": ["leche"] },
        { "nombre": "Infusiones", "precio": "1.50" }
      ]
    }

    
  ]
};