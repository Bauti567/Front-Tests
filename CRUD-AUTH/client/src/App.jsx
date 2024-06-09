import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>}/>
      <Route path='/login' element={<h1>El login</h1>}/>
      <Route path='/register' element={<h1>El registro</h1>}/>
      <Route path='/tasks' element={<h1>Tareas</h1>}/>
      <Route path='/add-task' element={<h1>Añadir tareas</h1>}/>
      <Route path='/tasks/:id' element={<h1>Actualizar tarea</h1>}/>
      <Route path='/profile' element={<h1>Profile Page</h1>}/>
      
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
