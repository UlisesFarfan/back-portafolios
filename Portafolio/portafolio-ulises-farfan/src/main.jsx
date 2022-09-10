import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)
