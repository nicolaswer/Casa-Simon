// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Menu from './components/Menu';
import { APP_ROUTES } from './config/routes';

// 1. IMPORTA EL COMPONENTE NUEVO
import ScrollToTop from './components/ScrollToTop'; 

import { parallevarData } from './data/parallevarData'; 
import { restauranteData } from './data/restauranteData'; 

function App() {
  return (
    <Router>
      {/* 2. PONLO AQUÍ, DENTRO DEL ROUTER PERO ANTES DE TODO */}
      <ScrollToTop /> 

      <Header />
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        
        <Route 
            path={APP_ROUTES.CARTA_RESTAURANTE} 
            element={
                <Menu 
                    data={restauranteData} 
                    title="Carta de Restaurante"
                    showTaxWarning={true}
                />
            } 
        />
        
        <Route 
            path={APP_ROUTES.CARTA_LLEVAR} 
            element={
                <Menu 
                    data={parallevarData} 
                    title="Carta Para Llevar"
                    showTaxWarning={false}
                />
            } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;