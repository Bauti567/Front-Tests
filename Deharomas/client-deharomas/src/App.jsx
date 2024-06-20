import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'; // Importa LoginPage como default import
import RegisterPage from './pages/registerPage';
import HomePage from './pages/HomePage';

import './index.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/> 
          <Route path='/login' element={<LoginPage/>}/> 
          <Route path='/register' element={<RegisterPage/>}/> 
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
