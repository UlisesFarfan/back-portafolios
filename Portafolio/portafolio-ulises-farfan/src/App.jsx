import React from 'react'
import Contacto from './component/Contacto'
import Home from './component/Home'
import Nav from './component/Nav'
import Proyectos from './component/Proyectos'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <React.Fragment >
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/proyectos' element={<Proyectos />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
