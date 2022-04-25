import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routing from './routing';

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routing></Routing>
    </BrowserRouter>,
    rootElement
);

export default Routing;
