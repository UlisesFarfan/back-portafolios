import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import axios from 'axios';
import dotenv from 'dotenv'

axios.defaults.baseURL = import.meta.env.BASE_URL || "http://127.0.0.1:5173"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)
