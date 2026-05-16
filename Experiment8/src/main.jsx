import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
const reactDom = ReactDOM;
reactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);