import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import TasksFormPage from './pages/TasksFormPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoutes from './ProtectedRoutes'
import './index.css'


function App() {
  return (
    // El authprovider es para el contexto de la aplicacion
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>


          <Route element={<ProtectedRoutes/>}>
            <Route path='/tasks' element={<TasksPage/>}/>
            <Route path='/add-task' element={<TasksFormPage/>}/>
            <Route path='/tasks/:id' element={<TasksFormPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
      </AuthProvider>
  )
}

export default App
