import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root_app'));
root.render(
  // <App saludo="Hola" />
  // <App saludo="Hola, esto es una propiedad">
  //   <p>Esto es un titulo.</p>
  // </App>
  <App />
);

