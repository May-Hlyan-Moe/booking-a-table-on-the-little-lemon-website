import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <BrowserRouter basename="/booking-a-table-on-the-little-lemon-website">
=======
    <BrowserRouter basename='booking-a-table-on-the-little-lemon-website'>
>>>>>>> Stashed changes
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
