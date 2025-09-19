import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate} from "react-router-dom"
import { registerRequest } from '../../service/api';
import { setToken } from '../../service/auth';

export default function Register() {
    const [email,setEmail] = useState("admin");
    const [password,setPassword] = useState("password");
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const {accessToken} = await registerRequest({email,password});
            setToken(accessToken);
            const redirectTo = location.state?.from?.pathname || "/";
            navigate(redirectTo,{ replace:true})
        }catch(err){
            console.error(err)
            setError("Erreur identifiants")
        }
    } 

    return (
        <div>
            <h1>Register</h1>

            <nav>
                <NavLink to="/login">Login </NavLink>
            </nav>
            <form onSubmit={onSubmit}>
                <label>email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button>Se connecter</button>
            </form>
        </div>
    )
}
