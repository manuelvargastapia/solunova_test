import RegisterForm from './RegisterForm';
import VideoEmbed from '../Layout/VideoEmbed';
import classes from './index.module.css';

const Register = () => {
    return (
        <section className={classes.register}>
            <div className={classes['left-form']}>
                <RegisterForm />
            </div>
            <div className={classes['right-video']}>
                <VideoEmbed />
            </div>
        </section>
    );
};

export default Register;
