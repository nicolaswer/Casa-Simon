import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Menu from './components/Menu';
import { APP_ROUTES } from './config/routes';

// 1. IMPORTA EL COMPONENTE NUEVO
import ScrollToTop from './components/BotonSubir'; 

import { parallevarData } from './data/parallevarData'; 
import { restauranteData } from './data/restauranteData';
import { desayunosData as desayunosAlmuerzosData } from './data/desayunosAlmuerzosData';

const LazyHome = lazy(() => import('./components/home'));
const LazyMenu = lazy(() => import('./components/Menu'));


function App() {
  return (
    <Router>
      <ScrollToTop /> 

      <Header />

      <Suspense fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-white">Cargando...</div>
      }>

        <Routes>
            <Route path={APP_ROUTES.HOME} element={<LazyHome />} />
            
            <Route 
                path={APP_ROUTES.CARTA_RESTAURANTE} 
                element={ 
                    <LazyMenu 
                        data={restauranteData}
                        title="Carta de Restaurante"
                        showTaxWarning={true} 
                    />
                } 
            />
            
            <Route 
                path={APP_ROUTES.CARTA_LLEVAR} 
                element={
                    <LazyMenu 
                        data={parallevarData} 
                        title="Carta Para Llevar"
                        showTaxWarning={false}
                    />
                } 
            />

            <Route 
                path={APP_ROUTES.CARTA_DESAYUNOS_ALMUERZOS} 
                element={
                    <LazyMenu 
                        data={desayunosAlmuerzosData} 
                        title="Desayunos y Almuerzos" 
                        showTaxWarning={false} // Sí lleva IVA aviso
                    />
                } 
            />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
