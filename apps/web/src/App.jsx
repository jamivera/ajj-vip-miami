import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AjjVipMiami from './pages/proposals/AjjVipMiami';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/propuestas/ajj-vip-miami" element={<AjjVipMiami />} />
            </Routes>
        </Router>
    );
}

export default App;
