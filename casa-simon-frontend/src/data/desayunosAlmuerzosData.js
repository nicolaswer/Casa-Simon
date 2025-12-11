// src/data/desayunosAlmuerzosData.js

export const desayunosData = {
"categorias": [
    {
      "id": "desayunos",
      "nombre": "Desayunos y Cafetería",
      "descripcion": "Para empezar el día con energía",
      "platos": [
        { "nombre": "Café (Todos los tipos)", "precio": "1.50", "alergenos": ["leche"] }, // Incluye cortado, con leche, solo...
        { "nombre": "Infusiones", "precio": "1.50" },
        // Mantengo tostadas base aunque no me has dado precio nuevo, asumiendo precio estándar o anterior
        { "nombre": "Tostada con Tomate / Mantequilla", "precio": "1.80", "alergenos": ["gluten", "leche"] },
        { "nombre": "Tostada de Jamón / Queso", "precio": "2.50", "alergenos": ["gluten", "leche"] }
      ]
    },
    {
      "id": "almuerzos",
      "nombre": "Almuerzos Populares",
      "descripcion": "Bocadillos en Pan Rústico",
      "platos": [
        // BOCADILLOS
        { 
          "nombre": "Bocadillo Simple", 
          "precio": "4.50", 
          "ingredientes": "Tortilla, Lomo, Bacon, Queso, Jamón...",
          "alergenos": ["gluten"] 
        },
        { 
          "nombre": "Bocadillo Completo", 
          "precio": "5.00", 
          "ingredientes": "Mezcla de ingredientes (Blanco y negro, Jazmin, Dani, Calamares ...)",
          "alergenos": ["gluten"] 
        },

        // EXTRAS / PICOTEO ALMUERZO
        { "nombre": "Suplemento Huevo Frito", "precio": "1.50", "alergenos": ["huevos"] },
        { "nombre": "Ración de Olivas", "precio": "1.50", "alergenos": ["sulfito"] },
        { "nombre": "Ración de Almendras", "precio": "1.50", "alergenos": ["fruto seco"] }
      ]
    },
    {
      "id": "bebidas_almuerzo",
      "nombre": "Bebidas",
      "descripcion": "Refrescos, Cervezas y Vinos",
      "platos": [
        // REFRESCOS Y AGUA
        { "nombre": "Refrescos (Todos)", "precio": "2.50" },
        { "nombre": "Agua Pequeña", "precio": "1.65" },
        { "nombre": "Agua Grande (Plástico)", "precio": "3.05" },
        { "nombre": "Agua Grande (Cristal)", "precio": "3.35" },
        { "nombre": "Casera Grande", "precio": "3.35" },
        { "nombre": "Casera Pequeña (Cristal)", "precio": "3.80" }, // Tal cual me has pedido

        // CERVEZAS
        { "nombre": "Caña", "precio": "2.50", "alergenos": ["gluten"] },
        { "nombre": "Tanque", "precio": "3.00", "alergenos": ["gluten"] },
        { "nombre": "Clara de Limón", "precio": "2.75", "alergenos": ["gluten"] },
        { "nombre": "Heineken", "precio": "2.50", "alergenos": ["gluten"] },
        { "nombre": "Mahou", "precio": "2.80", "alergenos": ["gluten"] },
        { "nombre": "Alhambra", "precio": "3.00", "alergenos": ["gluten"] },
        { "nombre": "Litro de Cerveza", "precio": "3.85", "alergenos": ["gluten"] },
        { "nombre": "Jarra de Cerveza", "precio": "4.40", "alergenos": ["gluten"] },

        // VINOS
        { "nombre": "Copa de Vino", "precio": "3.50", "alergenos": ["sulfito"] },
        { "nombre": "Tinto de Verano", "precio": "2.80", "alergenos": ["sulfito"] },
        { "nombre": "Jarra de Vino", "precio": "3.90", "alergenos": ["sulfito"] },
        { "nombre": "Sangría", "precio": "7.10", "alergenos": ["sulfito"] }
      ]
    }
  ]
};
