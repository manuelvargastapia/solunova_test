import { useState, useRef } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import ErrorMessage from '../../UI/ErrorMessage';
import Card from '../../UI/Card';
import Input from '../../UI/Input';
import classes from './index.module.css';

const Register = () => {
    const [error, setError] = useState('');
    const history = useHistory();
    const usernameInputRef = useRef();
    const firstnameInputRef = useRef();
    const lastnameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const registerHandler = async (event) => {
        event.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const { data } = await axios.post(
                '/api/users',
                {
                    username: usernameInputRef.current.value,
                    firstname: firstnameInputRef.current.value,
                    lastname: lastnameInputRef.current.value,
                    email: emailInputRef.current.value,
                    password: passwordInputRef.current.value,
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
        <section className={classes.form}>
            <Card>
                <form onSubmit={registerHandler}>
                    <h3 className={classes['form-title']}>Register</h3>
                    {error && <ErrorMessage error={error} />}
                    <Input
                        ref={usernameInputRef}
                        label="Username"
                        input={{
                            id: 'username',
                            type: 'text',
                            required: true,
                            placeholder: 'Enter username',
                        }}
                    />
                    <Input
                        ref={firstnameInputRef}
                        label="Firstname"
                        input={{
                            id: 'firstname',
                            type: 'text',
                            required: true,
                            placeholder: 'Enter firstname',
                        }}
                    />
                    <Input
                        ref={lastnameInputRef}
                        label="Lastname"
                        input={{
                            id: 'lastname',
                            type: 'text',
                            required: true,
                            placeholder: 'Enter lastname',
                        }}
                    />
                    <Input
                        ref={emailInputRef}
                        label="Email"
                        input={{
                            id: 'email',
                            type: 'email',
                            required: true,
                            placeholder: 'Enter email',
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
                    <button type="submit">Register</button>
                    <span className={classes['form-subtext']}>
                        Already have an account? <Link to="/login">Login</Link>
                    </span>
                </form>
            </Card>
        </section>
    );
};

export default Register;
