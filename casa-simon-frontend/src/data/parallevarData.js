// src/data/parallevarData.js

export const parallevarData = {
  "categorias": [
    {
      "id": "ensaladas",
      "nombre": "Ensaladas y Fríos",
      "descripcion": "Frescas y preparadas al momento",
      "platos": [
        { 
          "nombre": "Ensalada de Verano", 
          "precio": "5.50 / 3.00",
          "alergenos": [ "huevos", "pescados"] // 
        },
        { 
          "nombre": "Ensalada Murciana", 
          "precio": "5.50 / 3.00",
          "alergenos": ["huevos", "pescados"] // Comparte fila con Ensalada Pasta 
        },
        { 
          "nombre": "Ensalada de Pasta", 
          "precio": "5.50 / 3.00", 
          "alergenos": ["gluten", "huevos", "pescados", "mostaza"] 
        },
 
        { 
          "nombre": "Ensalada de Arroz", 
          "precio": "5.50 / 3.00",
          "alergenos": [] // Aparece en PDF pero sin X marcadas 
        },
        { 
          "nombre": "Mixta Pequeña", 
          "precio": "5.50",
          "alergenos": ["pescados"] // 
        },
        { 
          "nombre": "Mixta Grande", 
          "precio": "9.00",
          "alergenos": ["pescados"] 
        },
        { 
          "nombre": "César Pequeña", 
          "precio": "5.50",
          "alergenos": ["gluten", "huevos",  "cacahuete", "soja", "leche", "fruto seco", "mostaza"] // 
        },
        { 
          "nombre": "César Grande", 
          "precio": "9.00",
          "alergenos": ["gluten", "huevos","cacahuete", "soja", "leche", "fruto seco", "mostaza"] // 
        },
        { 
          "nombre": "Tomate y Capellán", 
          "precio": "6.00",
          "alergenos": ["pescados"] 
        },
        { 
          "nombre": "Gazpacho Andaluz", 
          "precio": "5.50",
          "alergenos": ["gluten"] 
        },
        { 
          "nombre": "Ensaladilla Rusa", 
          "precio": "4.00",
          "alergenos": [ "huevos", "pescados", "soja", "leche"] // Fila compartida 
        },
        { 
          "nombre": "Ensaladilla de Boca", 
          "precio": "4.00",
          "alergenos": ["crustaceos", "huevos", "pescados"] // Fila compartida 
        },
        { 
          "nombre": "Patata con Ajo", 
          "precio": "4.00",
          "alergenos": ["huevos"] // 
        },
        { 
          "nombre": "Tabulé", 
          "precio": "5.50",
          "alergenos": ["gluten", "soja","fruto seco", "sulfito"] // 
        }
      ]
    },
    {
      "id": "pastas",
      "nombre": "Pastas",
      "descripcion": "Clásicos italianos y elaboraciones caseras",
      "platos": [
        { "nombre": "Canelones de Carne", "precio": "5.50", "alergenos": ["gluten", "leche"] }, // 
        { "nombre": "Canelones de Espinaca", "precio": "5.50", "alergenos": ["gluten", "leche"] }, // 
        { "nombre": "Lasaña de Pollo", "precio": "5.50", "alergenos": ["gluten", "leche"] }, // 
        { "nombre": "Lasaña de Verdura", "precio": "5.50", "alergenos": ["gluten", "leche"] }, // 
        { "nombre": "Lasaña de Carne", "precio": "5.50", "alergenos": ["gluten", "leche"] }, // 
        { "nombre": "Berenjena de Carne", "precio": "5.50", "alergenos": ["gluten", "leche"] }, // 
        { "nombre": "Berenjena de Verdura", "precio": "5.50", "alergenos": ["gluten", "leche"] }, // 
        { "nombre": "Spaghetti Boloñesa", "precio": "5.50 / 3.00", "alergenos": ["gluten", "soja"] }, // 
        { "nombre": "Macarrones Boloñesa", "precio": "5.50 / 3.00", "alergenos": ["gluten", "soja"] }, // 
        { 
          "nombre": "Spaghetti Carbonara", 
          "precio": "5.50 / 3.00", 
          "alergenos": ["gluten", "leche", "sulfito"] // 
        },
        { 
          "nombre": "Arroz Tres Delicias", 
          "precio": "5.50 / 3.00", 
          "alergenos": ["huevos", "pescados","crustaceos", "sulfito"] // 
        },
        { 
          "nombre": "Tortellini o Ravioli", 
          "precio": "5.50 / 3.00", 
          "alergenos": ["gluten", "sulfito"] // Fila compartida con Tallarines/Embutido 
        },
        { 
          "nombre": "Tallarines Teriyaki", 
          "precio": "5.50 / 3.00", 
          "alergenos": ["gluten", "soja", "sulfito"] // Fila compartida 
        }
      ]
    },
    {
      "id": "caseros",
      "nombre": "Caseros y Tapas",
      "descripcion": "Guisos del día, carnes y raciones",
      "platos": [
        { 
          "nombre": "Embutidos con Pimiento", 
          "precio": "6.00 / 3.00", 
          "alergenos": ["leche"] // Fila compartida con Pastas 
        },
        { "nombre": "Berenjena Rellena (Carne/Verduras)", "precio": "5.50", "alergenos": ["gluten", "leche"] }, // 
        { "nombre": "Sangre con Cebolla", "precio": "5.50 / 3.00", "alergenos": [] }, // Sin X 
        { "nombre": "Hígado con Ajos", "precio": "5.50 / 3.00", "alergenos": [] }, // Sin X 
        { "nombre": "Pollo de Campo y Conejo con Tomate", "precio": "6.00 / 3.50", "alergenos": [] }, // Sin X 
        { "nombre": "Magra con Tomate", "precio": "5.50 / 3.00", "alergenos": ["soja"] }, // 
        { "nombre": "Albóndigas con Verdura", "precio": "5.50 / 3.00", "alergenos": ["gluten", "huevos", "soja"] }, // 
        { "nombre": "Callos", "precio": "5.50", "alergenos": ["sulfito"] }, // 
        { "nombre": "Alubias", "precio": "5.50 / 3.00", "alergenos": [] }, // Sin X 
        { "nombre": "Pelotas con Caldo", "precio": "5.50", "alergenos": ["gluten", "huevos", "fruto seco"] }, // 
        { "nombre": "Cocido", "precio": "6.00", "alergenos": ["gluten", "huevos", "apio"] }, // 
        { "nombre": "Gazpacho Manchego", "precio": "5.50 / 3.00", "alergenos": ["gluten"] }, // Compartida con Lentejas 
        { "nombre": "Lentejas", "precio": "5.50 / 3.00", "alergenos": [] }, // 
        { "nombre": "Crema de Calabaza", "precio": "5.00", "alergenos": ["leche"] }, // 
        { "nombre": "Pincho de Tortilla", "precio": "3.00", "alergenos": ["huevos"] }, // 
        { 
          "nombre": "Cordero", 
          "precio": "11.00", 
          "alergenos": [] // Sin X 
        },
        { 
          "nombre": "Migas", 
          "precio": "5.50", 
          "alergenos": ["gluten","leche", "sulfito"] // Fila compartida masiva 
        },
        { 
          "nombre": "Conejo al Ajillo", 
          "precio": "5.50", 
          "alergenos": ["cacahuete"] // Fila compartida masiva 
        },
        { 
          "nombre": "Fritura de Pescado", 
          "precio": "5.50", 
          "alergenos": ["gluten", "pescados"] // Fila compartida masiva 
        },
        { "nombre": "Queso Frito", "precio": "5.50", "alergenos": ["gluten", "leche"] }, // 
        { 
          "nombre": "Croquetas de Jamón", 
          "precio": "1.20 ud", 
          "alergenos": ["gluten", "leche"] // Comparte con Huevos Rotos 
        },
        { "nombre": "Huevos Rotos", "precio": "5.50", "alergenos": ["huevos"] }, // 
        { "nombre": "Rustidera de Pollo", "precio": "5.50", "alergenos": ["soja", "sulfito"] }, // 
        { "nombre": "Pechuga Empanada", "precio": "5.50", "alergenos": ["gluten", "huevos", "leche"] }, // 
        { "nombre": "Codillo de Cerdo", "precio": "6.00", "alergenos": ["soja", "sulfito"] }, // 
        { "nombre": "Manitas", "precio": "5.50", "alergenos": ["soja", "sulfito"] }, // 
        { "nombre": "Patatas Asadas", "precio": "5.00", "alergenos": [] }, // Sin X 
        { "nombre": "Bacalao con Tomate", "precio": "6.00", "alergenos": ["gluten", "pescados", "soja"] }, // 
        { "nombre": "Salmón al Horno", "precio": "6.00", "alergenos": ["gluten", "pescados", "soja"] }, // 
        { "nombre": "Bacalao al Horno", "precio": "6.00", "alergenos": ["gluten", "pescados", "soja"] }, // 
        { "nombre": "Merluza", "precio": "6.00", "alergenos": ["gluten", "pescados", "soja"] }, // 
        { "nombre": "Consome Relleno", "precio": "5.50", "alergenos": ["gluten", "huevos", "soja", "apio"] } // 
      ]
    },
    {
      "id": "arroces",
      "nombre": "Arroces",
      "descripcion": "Nuestras especialidades (Precio Ración / Tapa)",
      "platos": [
        { "nombre": "Arroz Conejo y Caracoles", "precio": "5.50 / 3.00", "alergenos": [] }, // Sin X 
        { "nombre": "Arroz Pollo de Campo y Garbanzos", "precio": "5.50 / 3.00", "alergenos": ["sulfito"] }, // 
        { "nombre": "Arroz de Pollo de Campo y Conejo", "precio": "5.50 / 3.00", "alergenos": ["sulfito"] }, // 
        { "nombre": "Arroz de Costillar con Ajos Tiernos", "precio": "5.50 / 3.00", "alergenos": [] }, // Sin X 
        { "nombre": "Arroz Magra y Verdura", "precio": "5.50 / 3.00", "alergenos": [] }, // Sin X 
        { "nombre": "Arroz de Verdura", "precio": "5.50 / 3.00", "alergenos": ["sulfito"] }, // 
        { 
          "nombre": "Arroz a Banda", 
          "precio": "6.00 / 3.50",
          "alergenos": ["crustaceos", "pescados", "sulfito", "moluscos"] // Comparte con Fideua 
        },
        { 
          "nombre": "Fideuá", 
          "precio": "6.00 / 3.50",
          "alergenos": ["gluten", "crustaceos", "pescados", "sulfito", "moluscos"] // 
        },
        { 
          "nombre": "Arroz al Horno", 
          "precio": "5.50 / 3.00", 
          "alergenos": ["leche"] // Comparte con Costra 
        },
        { 
          "nombre": "Arroz con Costra", 
          "precio": "5.50", 
          "alergenos": ["huevos", "leche"] // 
        }
      ]
    },
    {
      "id": "postres",
      "nombre": "Postres",
      "descripcion": "El final dulce perfecto",
      "platos": [
        { "nombre": "Tarta de Tres Chocolates", "precio": "3.00", "alergenos": ["gluten", "leche"] }, // 
        { "nombre": "Tarta de Galleta", "precio": "3.00", "alergenos": ["gluten", "leche"] }, // 
        { 
          "nombre": "Tarta de Almendra", 
          "precio": "3.00",
          "alergenos": ["gluten", "huevos","cacahuete","fruto seco"] // Fila compartida extraña en PDF, se copia tal cual 
        },
        { 
          "nombre": "Natillas", 
          "precio": "3.00",
          "alergenos": ["gluten", "huevos", "leche"] // 
        },
        { 
          "nombre": "Chocolate y Queso Albert Adrià", 
          "precio": "4.00", 
          "alergenos": ["gluten", "huevos", "cacahuete", "soja", "leche"] // 
        },
        { "nombre": "Tarta de Queso Albert Adrià", "precio": "4.00", "alergenos": ["gluten", "huevos", "leche"] }, // 
        { "nombre": "Pan de Calatrava", "precio": "3.00", "alergenos": ["gluten", "huevos", "leche"] }, // 
        { "nombre": "Tarta Lotus", "precio": "4.00", "alergenos": ["gluten", "huevos", "leche", "soja"] }, // 
        { "nombre": "Tarta Pistacho", "precio": "4.00", "alergenos": ["gluten", "huevos", "cacahuete", "leche", "fruto seco"] }, // 
        { "nombre": "Tarta Oreo", "precio": "4.00", "alergenos": ["gluten", "huevos", "leche"] }, // 
        { "nombre": "Arroz con Leche", "precio": "3.00", "alergenos": ["leche"] }, // 
        { "nombre": "Tarta de la Abuela", "precio": "4.00", "alergenos": ["gluten", "leche"] }, // 
      ]
    },
    
    /* --- BEBIDAS (Sin cambios respecto al original ya que no están en el PDF) --- */
    {
      "id": "bebidas_takeaway",
      "nombre": "Bebidas",
      "descripcion": "Refrescos y Cervezas frías",
      "platos": [
        { 
          "nombre": "Refrescos (Lata)", 
          "precio": "1.50", 
          "ingredientes": "Coca-Cola, Fanta, Tinto de Verano, Zumos" 
        },
        { 
          "nombre": "Refrescos (1 Litro)", 
          "precio": "2.00", 
          "ingredientes": "Coca-Cola, Fanta" 
        },
        { 
          "nombre": "Refrescos (1,5 Litros)", 
          "precio": "2.50", 
          "ingredientes": "Coca-Cola" 
        },
        { 
          "nombre": "Refrescos (2 Litros)", 
          "precio": "3.00", 
          "ingredientes": "Coca-Cola" 
        },
        { "nombre": "Aquarius (1,5 Litros)", "precio": "3.00" },
        { "nombre": "Red Bull", "precio": "2.00" },
        { "nombre": "Agua con Gas", "precio": "1.80" },
        { 
          "nombre": "Cerveza (Lata)", 
          "precio": "1.50", 
          "ingredientes": "Normal o Sin Alcohol" 
        },
        { "nombre": "Alhambra Reserva (Lata)", "precio": "2.50" },
        { "nombre": "Cerveza Sin Alcohol (Litro)", "precio": "3.00" },
        { "nombre": "Cerveza (Litro)", "precio": "3.00" },
        { "nombre": "Agua Mineral (Pequeña)", "precio": "1.50" },
        { "nombre": "Agua Solán (1,5 Litros)", "precio": "2.00" }
      ]
    }
  ]
};