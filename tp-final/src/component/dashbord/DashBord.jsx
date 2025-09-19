import React from 'react';
import { clearToken } from '../../service/auth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();

    const deco = () => {
        clearToken();          
        navigate('/login');    
    }

    return (
        <div>
            <nav>
                <button onClick={deco}>Déconnexion</button>
            </nav>
            <h1>Dashboard</h1>
        </div>
    );
}
