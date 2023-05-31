import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter, useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;