import './App.css';
import Home from './pages/Home';
import { meta_title, meta_description, meta_keywords } from './data/metadata';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React from 'react';

const App = () => {
    return (
        <div className="App">
            {/* SEO Stuff */}
            <HelmetProvider>
                <Helmet>
                    <title>{meta_title}</title>
                    <meta name="description" content={meta_description}></meta>
                    <meta name="keywords" content={meta_keywords}></meta>
                </Helmet>
            </HelmetProvider>

            {/* The Application */}
            <Home />
        </div>
    );
};

export default App;
