import profileIcon from '../../../assets/images/icon_profile.png';
import classes from './index.module.css';

const UserInfo = ({ children }) => {
    return (
        <div className={classes['user-info']}>
            <img src={profileIcon} alt="Profile icon" />
            <div>
                <h2>your profile</h2>
                <table>{children}</table>
            </div>
        </div>
    );
};

export default UserInfo;
