// Validar si el usuario está logueado
import {Navigate, Outlet} from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import React from 'react'

export default function ProtectedRoutes() {
    const {loading, isAuthenticated} = useAuth()
    console.log(loading, isAuthenticated)

    if(loading) return <h1>Loading...</h1>
    if(loading && !isAuthenticated) return <Navigate to='/login' replace />

    return  <Outlet/>;

}
