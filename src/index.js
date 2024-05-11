import React from 'react';
import ReactDOM from 'react-dom/client'; // Changed import for React 18
import { Provider } from 'react-redux';
import store from './redux/store';  // Adjust the path according to where your store is defined
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // New API for React 18
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
