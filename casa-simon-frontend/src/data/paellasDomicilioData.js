// src/data/paellasDomicilioData.js

export const paellasDomicilioData = {
  "categorias": [
    {
      "id": "info-domicilio",
      "nombre": "Información del Servicio",
      "descripcion": "Condiciones de entrega y recipientes",
      "platos": [
        { 
          "nombre": "Envío a Domicilio", 
          "precio": "GRATIS ", 
          "ingredientes": "Reparto en toda Elche y Pedanías." 
        },
        { 
          "nombre": "Fianza Paellera (Reembolsable)", 
          "precio": "20.00", 
          "ingredientes": "Se abona por el recipiente metálico. Te devolvemos los 20€ al entregar la paellera limpia en cualquiera de nuestros locales." 
        }
      ]
    },
    {
      "id": "paellas",
      "nombre": "Arroces a la Leña (Para Llevar)",
      "descripcion": "El auténtico sabor, en tu mesa. (Precio por ración)",
      "platos": [
        { "nombre": "Paella de conejo y caracoles", "precio": "15.15" },
        { "nombre": "Paella de pollo de campo y conejo", "precio": "15.15" },
        { "nombre": "Paella de verdura y magra", "precio": "15.15" },
        { "nombre": "Paella a banda", "precio": "15.15", "alergenos": ["crustaceos", "moluscos", "pescados"] },
        { "nombre": "Arroz con Costra (Típico Ilicitano)", "precio": "16.50", "alergenos": ["huevos", "gluten"] },
        { "nombre": "Fideuá a la leña", "precio": "15.15", "alergenos": ["gluten", "pescados"] }
      ]
    },
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
        { "nombre": "Mejillones al Vapor", "precio": "4.55", "alergenos": ["moluscos"] }
      ]
    }
  ]
};