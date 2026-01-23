import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/BotonSubir';
import WineChatbot from './components/WineChatbot';
import { APP_ROUTES } from './config/routes';

// --- DATOS ---
import { parallevarData } from './data/parallevarData';
import { restauranteData } from './data/restauranteData';
import { desayunosData as desayunosAlmuerzosData } from './data/desayunosAlmuerzosData';
import { paellasDomicilioData } from './data/paellasDomicilioData';

// --- COMPONENTES (Lazy Loading) ---
const LazyHome = lazy(() => import('./components/home'));
const LazyMenu = lazy(() => import('./components/Menu')); // Tu menú genérico actualizado
const LazyBlog = lazy(() => import('./components/Blog'));
const LazyReserve = lazy(() => import('./components/ReservationForm'));
const LazyAvisoLegal = lazy(() => import('./components/AvisoLegal'));
const LazyPrivacidad = lazy(() => import('./components/Privacidad'));

// --- BLOG POSTS ---
const LazyPostPaella = lazy(() => import('./components/blog-posts/PostPaella'));
const LazyPostCarnes = lazy(() => import('./components/blog-posts/PostCarnes'));
const LazyPostLocales = lazy(() => import('./components/blog-posts/PostLocales'));
const LazyPostDomicilio = lazy(() => import('./components/blog-posts/PostDomicilio'));
const LazyPostAlmuerzos = lazy(() => import('./components/blog-posts/PostAlmuerzos'));
const LazyPostPostres = lazy(() => import('./components/blog-posts/PostPostres'));

// --- TABLAS DE ALÉRGENOS ---
const LazyAlergenosLocal = lazy(() => import('./components/AlergenosLocal'));
const LazyAlergenosRestaurante = lazy(() => import('./components/AlergenosRestaurante'));

// --- WRAPPER CARTA RESTAURANTE (Para Chatbot y Botón Alérgenos) ---
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
          onLoad={() => setMenuLoaded(true)}
          // ✅ AQUÍ ESTÁ LA CORRECCIÓN: Pasamos el enlace para que salga el botón
          allergenLink={APP_ROUTES.ALERGENOS_RESTAURANTE} 
        />
      </Suspense>

      {/* El Chatbot espera a que el menú cargue */}
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
          
          {/* HOME Y RESERVAS */}
          <Route path={APP_ROUTES.HOME} element={<LazyHome />} />
          <Route path={APP_ROUTES.RESERVA_RESTAURANTE} element={<LazyReserve />} />

          {/* 1. CARTA RESTAURANTE (Usa el Wrapper de arriba) */}
          <Route 
            path={APP_ROUTES.CARTA_RESTAURANTE} 
            element={<CartaRestaurantePage />} 
          />

          {/* 2. CARTA PARA LLEVAR (Con botón de alérgenos) */}
          <Route 
            path={APP_ROUTES.CARTA_LLEVAR} 
            element={
              <LazyMenu 
                data={parallevarData} 
                title="Carta Para Llevar"
                showTaxWarning={false}
                // ✅ Pasamos el enlace de alérgenos LOCAL
                allergenLink={APP_ROUTES.ALERGENOS_PARALLEVAR}
              />
            } 
          />

          {/* 3. CARTA DOMICILIO */}
          <Route 
            path={APP_ROUTES.CARTA_PAELLAS_DOMICILIO} 
            element={
              <LazyMenu 
                data={paellasDomicilioData} 
                title="Paellas a Domicilio" 
                showTaxWarning={true}
                // Si quieres botón aquí también, añade allergenLink={APP_ROUTES.ALERGENOS_PARALLEVAR}
              />
            } 
          />

          {/* 4. CARTA ALMUERZOS */}
          <Route 
            path={APP_ROUTES.CARTA_DESAYUNOS_ALMUERZOS} 
            element={
              <LazyMenu 
                data={desayunosAlmuerzosData} 
                title="Desayunos y Almuerzos" 
                showTaxWarning={false} 
              />
            }
          />

          {/* BLOG Y LEGAL */}
          <Route path={APP_ROUTES.BLOG} element={<LazyBlog />} />
          <Route path={APP_ROUTES.AVISO_LEGAL} element={<LazyAvisoLegal />} />
          <Route path={APP_ROUTES.PRIVACIDAD} element={<LazyPrivacidad />} />
          
          {/* ARTÍCULOS */}
          <Route path={APP_ROUTES.BLOG_POST_PAELLA} element={<LazyPostPaella />} />
          <Route path={APP_ROUTES.BLOG_POST_CARNES} element={<LazyPostCarnes />} />
          <Route path={APP_ROUTES.BLOG_POST_LOCALES} element={<LazyPostLocales />} />
          <Route path={APP_ROUTES.BLOG_POST_DOMICILIO} element={<LazyPostDomicilio />} />
          <Route path={APP_ROUTES.BLOG_POST_ALMUERZOS} element={<LazyPostAlmuerzos />} />
          <Route path={APP_ROUTES.BLOG_POST_POSTRES} element={<LazyPostPostres />} />

          {/* RUTAS TÉCNICAS (LAS TABLAS DE ALÉRGENOS) */}
          <Route path={APP_ROUTES.ALERGENOS_PARALLEVAR} element={<LazyAlergenosLocal />} />
          <Route path={APP_ROUTES.ALERGENOS_RESTAURANTE} element={<LazyAlergenosRestaurante />} />

        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;