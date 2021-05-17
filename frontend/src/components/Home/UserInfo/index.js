import profileIcon from '../../../assets/images/icon_profile.png';
import classes from './index.module.css';

const UserInfo = ({ children }) => {
    return (
        <div className={classes['user-info']}>
            <img src={profileIcon} alt="Profile icon" />
            <div className={classes['user-info-container']}>
                <h2>your profile</h2>
                <div className={classes['user-info-children']}>{children}</div>
            </div>
        </div>
    );
};

export default UserInfo;
