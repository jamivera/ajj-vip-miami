import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AjjVipMiami from './pages/proposals/AjjVipMiami';

// Base del router: en la raíz es '' (Vercel), y bajo GitHub Pages es
// '/<repo>' (Vite expone la base en import.meta.env.BASE_URL).
const ROUTER_BASENAME = import.meta.env.BASE_URL.replace(/\/$/, '');

// Cuando el despliegue es solo para presentar la propuesta (p.ej. GitHub Pages),
// la raíz muestra directamente la propuesta (enlace más corto). En Vercel/raíz
// (sin esta variable) la home sigue siendo la de Endyxo.
const HOME_IS_PROPOSAL = import.meta.env.VITE_HOME_IS_PROPOSAL === '1';

function App() {
    return (
        <Router basename={ROUTER_BASENAME}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={HOME_IS_PROPOSAL ? <AjjVipMiami /> : <HomePage />} />
                <Route path="/propuestas/ajj-vip-miami" element={<AjjVipMiami />} />
            </Routes>
        </Router>
    );
}

export default App;
