import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';


import './index.css';
import { store,persistedStore  } from './Redux/store';
import {stipeInstance} from './Utils/stripe/stripe'




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistedStore}>
            <Elements stripe={stipeInstance}>
                <App />
                </Elements>
        </PersistGate>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
