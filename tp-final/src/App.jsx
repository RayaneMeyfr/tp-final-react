import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/login/Login'
import ProtectedRoute from './route/ProtectedRoute'
import DashBord from './component/dashbord/DashBord'

export default function App() {
  return (
    <Routes>
        <Route path='login' element={<Login/>} />
        <Route element={<ProtectedRoute/>}> 
            <Route path='/' element={<DashBord/>} />
        </Route>
    </Routes>  
  )
}
