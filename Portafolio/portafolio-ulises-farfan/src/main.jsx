import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import axios from 'axios';
import dotenv from 'dotenv'

axios.defaults.baseURL = import.meta.env.VITE_APP_API
console.log(import.meta.env.VITE_APP_API)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)
