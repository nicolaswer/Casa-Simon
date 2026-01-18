import React, {lazy, Suspense, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import WineChatbot from './components/WineChatbot';
import { APP_ROUTES } from './config/routes';

// 1. IMPORTA EL COMPONENTE NUEVO
import ScrollToTop from './components/BotonSubir'; 

import { parallevarData } from './data/parallevarData'; 
import { restauranteData } from './data/restauranteData';

import { desayunosData as desayunosAlmuerzosData } from './data/desayunosAlmuerzosData';
import { paellasDomicilioData } from './data/paellasDomicilioData';

const LazyHome = lazy(() => import('./components/home'));
const LazyMenu = lazy(() => import('./components/Menu'));
const LazyBlog = lazy(() => import('./components/Blog'));
const LazyAvisoLegal = lazy(() => import('./components/AvisoLegal'));
const LazyPrivacidad = lazy(() => import('./components/Privacidad'));
const LazyPostPaella = lazy(() => import('./components/blog-posts/PostPaella'));
const LazyPostCarnes = lazy(() => import('./components/blog-posts/PostCarnes'));
const LazyPostLocales = lazy(() => import('./components/blog-posts/PostLocales'));
const LazyPostDomicilio = lazy(() => import('./components/blog-posts/PostDomicilio'));
const LazyPostAlmuerzos = lazy(() => import('./components/blog-posts/PostAlmuerzos'));
const LazyPostPostres = lazy(() => import('./components/blog-posts/PostPostres'));

// --- Wrapper de página para Carta Restaurante ---
const CartaRestaurantePage = () => {
  const [menuLoaded, setMenuLoaded] = useState(false);

  return (
    <>
      <Suspense
        fallback={
          <div className="min-h-screen bg-black flex items-center justify-center text-white">
            Cargando carta...
          </div>
        }
      >
        <LazyMenu
          data={restauranteData}
          title="Carta de Restaurante"
          showTaxWarning={true}
          onLoad={() => setMenuLoaded(true)} // Callback cuando Menu ya cargó
        />
      </Suspense>

      {/* Chatbot solo se monta después de que el menú cargue */}
      {menuLoaded && <WineChatbot />}
    </>
  );
};

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
                element={<CartaRestaurantePage />}
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
            <Route 
                path={APP_ROUTES.CARTA_PAELLAS_DOMICILIO} 
                element={
                    <LazyMenu 
                        data={paellasDomicilioData} 
                        title="Paellas a Domicilio" 
                        showTaxWarning={true} // Sí lleva IVA aviso
                    />
                }
            />
            <Route path={APP_ROUTES.BLOG} element={<LazyBlog />} />
            <Route path={APP_ROUTES.AVISO_LEGAL} element={<LazyAvisoLegal />} />
            <Route path={APP_ROUTES.PRIVACIDAD} element={<LazyPrivacidad />} />
            <Route path={APP_ROUTES.BLOG_POST_PAELLA} element={<LazyPostPaella />} />
            <Route path={APP_ROUTES.BLOG_POST_CARNES} element={<LazyPostCarnes />} />
            <Route path={APP_ROUTES.BLOG_POST_LOCALES} element={<LazyPostLocales />} />
            <Route path={APP_ROUTES.BLOG_POST_DOMICILIO} element={<LazyPostDomicilio />} />
            <Route path={APP_ROUTES.BLOG_POST_ALMUERZOS} element={<LazyPostAlmuerzos />} />
            <Route path={APP_ROUTES.BLOG_POST_POSTRES} element={<LazyPostPostres />} />

        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
