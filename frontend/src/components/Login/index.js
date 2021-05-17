import LoginForm from './LoginForm';
import BackgroundImage from '../Layout/BackgroundImage';
import BackgroundLogo from '../Layout/BackgroundLogo';
import classes from './index.module.css';

const Login = () => {
    return (
        <section className={classes.login}>
            <div className={classes['left-image']}>
                <BackgroundImage />
                <BackgroundLogo />
            </div>
            <div>
                <div className={classes['form-background']}>
                    <BackgroundImage />
                </div>
                <LoginForm />
            </div>
        </section>
    );
};

export default Login;
