// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Menu from './components/Menu';
import { APP_ROUTES } from './config/routes';

import { parallevarData } from './data/parallevarData'; 
import { restauranteData } from './data/restauranteData'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        
        {/* RESTAURANTE: Activamos el aviso de impuestos */}
        <Route 
            path={APP_ROUTES.CARTA_RESTAURANTE} 
            element={
                <Menu 
                    data={restauranteData} 
                    title="Carta de Restaurante"
                    showTaxWarning={true}  // <--- AQUÍ ESTÁ LA CLAVE (TRUE = Muestra IVA no incl.)
                />
            } 
        />
        
        {/* PARA LLEVAR: Desactivamos el aviso */}
        <Route 
            path={APP_ROUTES.CARTA_LLEVAR} 
            element={
                <Menu 
                    data={parallevarData} 
                    title="Carta Para Llevar"
                    showTaxWarning={false} // <--- FALSE = Lo oculta
                />
            } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;