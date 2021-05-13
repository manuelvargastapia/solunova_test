import { useState, useRef } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import ErrorMessage from '../../UI/ErrorMessage';
import Card from '../../UI/Card';
import Input from '../../UI/Input';
import classes from './index.module.css';

const LoginForm = () => {
    const [error, setError] = useState('');
    const history = useHistory();
    const usernameOrEmailInputRef = useRef();
    const passwordInputRef = useRef();

    const loginHandler = async (event) => {
        event.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const credentials = {};
        const usernameOrEmail = usernameOrEmailInputRef.current.value;
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
                    password: passwordInputRef.current.value,
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
        <section className={classes.form}>
            <Card>
                <form onSubmit={loginHandler}>
                    <h3 className={classes['form-title']}>Login</h3>
                    {error && <ErrorMessage error={error} />}
                    <Input
                        ref={usernameOrEmailInputRef}
                        label="Username or Email"
                        input={{
                            id: 'usernameOrEmail',
                            type: 'text',
                            required: true,
                            placeholder: 'Enter username or email',
                        }}
                    />
                    <Input
                        ref={passwordInputRef}
                        label="Password"
                        input={{
                            id: 'password',
                            type: 'password',
                            required: true,
                            placeholder: 'Enter password',
                        }}
                    />
                    <button type="submit">Login</button>
                    <span className={classes['form-subtext']}>
                        Don't have an account?{' '}
                        <Link to="/register">Register</Link>
                    </span>
                </form>
            </Card>
        </section>
    );
};

export default LoginForm;
