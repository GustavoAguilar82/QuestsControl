import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  //en el root (zona de html)
root.render(
    <App />   //está renderizando un tal elemento llamado App, importado de ./App
);
