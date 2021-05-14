import { useState, useRef } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import ErrorMessage from '../../UI/ErrorMessage';
import Form from '../../UI/Form';
import Input from '../../UI/Input';
import classes from './index.module.css';

const Subtext = () => {
    return (
        <span className={classes.subtext}>
            Don't have an account? Create it <Link to="/register">here</Link>
        </span>
    );
};

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
        <Form
            title="Welcome"
            onSubmitHandler={loginHandler}
            submitButtonTitle="LOGIN"
            subtext={<Subtext />}
        >
            {error && <ErrorMessage error={error} />}
            <Input
                ref={usernameOrEmailInputRef}
                type="text"
                required
                placeholder="Username or Email"
                icon={<FaUser />}
            />
            <Input
                ref={passwordInputRef}
                type="password"
                required={true}
                placeholder="Password"
                icon={<FaLock />}
            />
        </Form>
    );
};

export default LoginForm;
