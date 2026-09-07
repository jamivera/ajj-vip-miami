import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AjjVipMiami from './pages/proposals/AjjVipMiami';

// Base del router: en la raíz es '' (Vercel), y bajo GitHub Pages es
// '/<repo>' (Vite expone la base en import.meta.env.BASE_URL).
const ROUTER_BASENAME = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
    return (
        <Router basename={ROUTER_BASENAME}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/propuestas/ajj-vip-miami" element={<AjjVipMiami />} />
            </Routes>
        </Router>
    );
}

export default App;
