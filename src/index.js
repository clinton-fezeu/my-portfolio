import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// render favicon
const favicon = document.querySelector("link[rel='icon']");
if (favicon) {
  favicon.href = `${process.env.PUBLIC_URL}/clinton.jpg`;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
