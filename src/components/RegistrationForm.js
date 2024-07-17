import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.username === username);
        if (userExists) {
            alert('Username already taken');
        } else {
            const newUser = { username, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful');
            navigate('/login');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <div>
                <label>Username: </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
