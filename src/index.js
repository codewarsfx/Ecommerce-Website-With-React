import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'


import './index.css';
import UserProvider from './context/userContext';
import ShopProvider from './context/shopContext';
import CartItemProvider from './context/cart-item';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <UserProvider>
          <ShopProvider>
              <CartItemProvider>
                <App />
            </CartItemProvider>
          </ShopProvider>
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
