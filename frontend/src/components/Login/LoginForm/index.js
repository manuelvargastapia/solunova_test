import { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { login } from '../../../helpers/api';
import ErrorMessage from '../../UI/ErrorMessage';
import Form from '../../UI/Form';
import Input from '../../UI/Input';
import BackgroundLogo from '../../Layout/BackgroundLogo';
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

        try {
            const authToken = await login({
                usernameOrEmail: usernameOrEmailInputRef.current.value,
                password: passwordInputRef.current.value,
            });
            localStorage.setItem('authToken', authToken);
            history.push('/home');
        } catch (error) {
            setError(error);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    };

    return (
        <>
            <BackgroundLogo className={classes.logo} />
            <Form
                title="Welcome"
                onSubmitHandler={loginHandler}
                submitButtonTitle="login"
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
        </>
    );
};

export default LoginForm;
