import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            return alert("Please enter both username and password.");
        }

        try {
            const res = await fetch("https://67697d4f863eaa5ac0dbd1ce.mockapi.io/ToDo/users");
            if (!res.ok) {
                throw new Error("Failed to fetch users");
            }

            const data = await res.json();

            const findUser = data.find(
                (user) => user.username === username && user.password === password
            );

            if (!findUser) {
                return alert("Incorrect username or password.");
            }

            localStorage.setItem("user_id", findUser.id || findUser._id);
            navigate("/toDo");
        } catch (error) {
            alert("An error occurred: " + error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Email or Phone"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
                <p className="social-text">Login with a social media account</p>
                <p className="social-text">Don't have an account?</p>
                <button className="">
                    <a href="/register">Register here</a>
                </button>
            </form>
        </div>
    );
};

export default Login;
