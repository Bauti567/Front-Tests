import React from 'react'
import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatList from './components/CatList';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home page</h1>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/cat' element={<h1>cat</h1>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App