// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Obtenemos la ruta actual (ej: "/", "/carta")
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando la ruta cambia, hacemos scroll a (0, 0) instantáneamente
    window.scrollTo(0, 0);
  }, [pathname]); // Se ejecuta cada vez que cambia 'pathname'

  return null; // No renderiza nada visual
};

export default ScrollToTop;
