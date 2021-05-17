import classes from './index.module.css';
import { RiShutDownLine } from 'react-icons/ri';

const LogoutButton = ({ onClick }) => {
    return (
        <div className={classes.logout} onClick={onClick}>
            <RiShutDownLine />
        </div>
    );
};

export default LogoutButton;
