import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/login/Login'
import ProtectedRoute from './route/ProtectedRoute'
import DashBord from './component/dashbord/DashBord'
import Register from './component/Register/Register'

export default function App() {

    return (
        <div>
            <Routes>
                <Route path='login' element={<Login/>} />
                <Route path='Register' element={<Register/>}/>
                <Route element={<ProtectedRoute/>}> 
                    <Route path='/' element={<DashBord/>} />
                </Route>
            </Routes> 
        </div>
    )
}
