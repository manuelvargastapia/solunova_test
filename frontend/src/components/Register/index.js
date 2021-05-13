import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import classes from './index.module.css';

import React from 'react';
import ErrorMessage from '../UI/ErrorMessage';

const Register = () => {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const { data } = await axios.post(
                '/api/users',
                {
                    username,
                    firstname,
                    lastname,
                    email,
                    password,
                },
                config
            );

            localStorage.setItem('authToken', data.token);
            history.push('/login');
        } catch (error) {
            setError(error.response.data.data.error);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    };

    return (
        <div className={classes.register}>
            <form
                className={classes['register-form']}
                onSubmit={registerHandler}
            >
                <h3 className={classes['register-title']}>Register</h3>
                {error && <ErrorMessage error={error} />}
                <div className="form-group">
                    <label htmlFor="name">Username:</label>
                    <input
                        type="text"
                        required
                        id="name"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">Firstname:</label>
                    <input
                        type="text"
                        required
                        id="firstname"
                        placeholder="Enter firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Lastname:</label>
                    <input
                        type="text"
                        required
                        id="lastname"
                        placeholder="Enter lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        required
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        required
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className={classes['register-button']} type="submit">
                    Register
                </button>
                <span className={classes['register-subtext']}>
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};

export default Register;
