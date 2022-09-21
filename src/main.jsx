import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppHome, Home } from './components';
import { GifExpertApp } from './GifExpertApp';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppHome/> */}
    <GifExpertApp />
  </React.StrictMode>
)
