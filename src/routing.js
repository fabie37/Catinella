import App from './App';
import NoMatch from './pages/NoMatch';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Routing = () => (
    <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<App page="about" />} />
        <Route exact path="/contact" element={<App page="contact" />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
);

export default Routing;
