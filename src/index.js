import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
=======
import './app.css';
>>>>>>> 627a70827361a847c2e6a3fe6e43faaa95ae2018
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
