import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import classes from './index.module.css';

import React from 'react';
import ErrorMessage from '../UI/ErrorMessage';

const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const credentials = {};
        if (usernameOrEmail.includes('@')) {
            credentials.email = usernameOrEmail;
        } else {
            credentials.username = usernameOrEmail;
        }

        try {
            const { data } = await axios.post(
                '/api/login',
                {
                    ...credentials,
                    password,
                },
                config
            );

            localStorage.setItem('authToken', data.token);

            history.push('/home');
        } catch (error) {
            setError(error.response.data.data.error);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    };

    return (
        <div className={classes.login}>
            <form className={classes['login-form']} onSubmit={loginHandler}>
                <h3 className={classes['login-title']}>Login</h3>
                {error && <ErrorMessage error={error} />}
                <div className="form-group">
                    <label htmlFor="usernameOrEmail">Username or Email:</label>
                    <input
                        type="text"
                        required
                        id="usernameOrEmail"
                        placeholder="Enter username or email"
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
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
                <button type="submit">Login</button>
                <span className={classes['login-subtext']}>
                    Don't have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
