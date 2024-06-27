// Validar si el usuario está logueado
import {Navigate, Outlet} from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import React from 'react'

export default function ProtectedRoutes() {
    const {user, isAuthenticated} = useAuth()
    console.log(user, isAuthenticated)

    if(!isAuthenticated) return <Navigate to='/login' replace />

    return  <Outlet/>;

}
