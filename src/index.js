import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import NoMatch from './pages/NoMatch';

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
