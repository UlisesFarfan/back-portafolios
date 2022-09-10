import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_API || "http://127.0.0.1:5173"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)
