// src/pages/RegistrationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.username === username);
        if (userExists) {
            alert('User already exists');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful');
            navigate('/login');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationPage;
