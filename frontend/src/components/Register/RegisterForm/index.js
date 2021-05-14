import { useState, useRef } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import ErrorMessage from '../../UI/ErrorMessage';
import Form from '../../UI/Form';
import Input from '../../UI/Input';
import classes from './index.module.css';

const Subtext = () => {
    return (
        <span className={classes.subtext}>
            Already have an account? Go to <Link to="/login">login</Link>
        </span>
    );
};

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
        <Form
            title="Create an account"
            onSubmitHandler={registerHandler}
            submitButtonTitle="REGISTER"
            subtext={<Subtext />}
        >
            {error && <ErrorMessage error={error} />}
            <div className={classes.inputs}>
                <Input
                    ref={emailInputRef}
                    className={classes['first-input']}
                    type="email"
                    required
                    placeholder="Email"
                    icon={<FaEnvelope />}
                />
                <Input
                    ref={firstnameInputRef}
                    type="text"
                    required
                    placeholder="Firstname"
                    icon={<FaUser />}
                />
                <Input
                    ref={lastnameInputRef}
                    type="text"
                    required
                    placeholder="Lastname"
                    icon={<FaUser />}
                />
                <Input
                    ref={usernameInputRef}
                    type="text"
                    required
                    placeholder="Username"
                    icon={<FaUser />}
                />
                <Input
                    ref={passwordInputRef}
                    type="password"
                    required
                    placeholder="Password"
                    icon={<FaLock />}
                />
            </div>
        </Form>
    );
};

export default Register;
