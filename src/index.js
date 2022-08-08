import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContextProvider } from './context/userContext';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';
import { CartContextProvider } from './context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
