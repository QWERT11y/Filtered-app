import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            return alert("Please fill in all fields.");
        }

        try {
            const res = await fetch("https://67697d4f863eaa5ac0dbd1ce.mockapi.io/ToDo/users");
            if (!res.ok) {
                throw new Error("Failed to fetch users");
            }

            const data = await res.json();

            const foundUser = data.find((user) => user.username === username);
            if (foundUser) {
                return alert("User already exists");
            }

            const newUser = {
                _id: Math.random().toString().split(".")[1] + Math.random().toString().split(".")[1],
                username: username,
                password: password,
            };

            await fetch("https://67697d4f863eaa5ac0dbd1ce.mockapi.io/ToDo/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            localStorage.setItem("user_id", newUser._id);
            navigate("/login");
        } catch (err) {
            alert("An error occurred: " + err.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>

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

                <button type="submit">Register</button>
                <p className="social-text">Login with a social media account</p>
                <p className="social-text">Already have an account?</p>
                <button className="">
                    <a href="/login">Login here</a>
                </button>
            </form>
        </div>
    );
};

export default Register;
