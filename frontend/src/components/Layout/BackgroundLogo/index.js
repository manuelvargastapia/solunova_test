import logoImg from '../../../assets/images/logo.png';
import classes from './index.module.css';

const BackgroundLogo = ({ className }) => {
    return (
        <img
            className={`${className ? className : classes.logo}`}
            src={logoImg}
            alt="Horizon Zero Dawn logo"
        />
    );
};

export default BackgroundLogo;
