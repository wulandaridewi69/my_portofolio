import React from 'react';
import RouteApp from './routes/Route';
import ReactDOM from 'react-dom/client';

import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteApp />
  </React.StrictMode>
);

