import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'; // Importa LoginPage como default import
import RegisterPage from './pages/registerPage';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Esta es la home page</h1>}/> 
          <Route path='/login' element={<LoginPage/>}/> 
          <Route path='/register' element={<RegisterPage/>}/> 
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
