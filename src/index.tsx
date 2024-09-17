import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Senicare from './Senicare';
import { BrowserRouter } from 'react-router-dom';
import "./ReactotronConfig"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Senicare />
    </BrowserRouter>
  </React.StrictMode>
);
