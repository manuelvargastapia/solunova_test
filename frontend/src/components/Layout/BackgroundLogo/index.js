import logoImg from '../../../assets/images/logo.png';
import classes from './index.module.css';

const BackgroundLogo = () => {
    return (
        <img
            className={classes.logo}
            src={logoImg}
            alt="Horizon Zero Dawn logo"
        />
    );
};

export default BackgroundLogo;
