import RegisterForm from './RegisterForm';
import BackgroundImage from '../Layout/BackgroundImage';
import classes from './index.module.css';

const Register = () => {
    return (
        <section className={classes.register}>
            <div className={classes['left-form']}>
                <RegisterForm />
            </div>
            <div className={classes['right-image']}>
                <BackgroundImage />
            </div>
        </section>
    );
};

export default Register;
