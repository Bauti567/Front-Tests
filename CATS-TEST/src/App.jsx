import React from 'react'
import { useState,useEffect } from 'react'
import CatList from './components/CatList';


function App() {
  return (
    <div className='bg-dark text-white'>
      <h1 className='text-center display-1 py-4'>Mi aplicacion de gatos</h1>
      <CatList/>
      
    </div>
  )
}

export default App