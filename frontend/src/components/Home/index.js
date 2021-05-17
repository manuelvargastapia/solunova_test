import { useHistory } from 'react-router-dom';
import moment from 'moment';
import useUserInfo from './hooks/useUserInfo';
import ErrorMessage from '../UI/ErrorMessage';
import BackgroundLogo from '../Layout/BackgroundLogo';
import Menu from './Menu';
import MenuItem from './MenuItem';
import UserInfo from './UserInfo';
import UserInfoItem from './UserInfoItem';
import LogoutButton from './LogoutButton';
import gameplayIcon from '../../assets/images/icon_gameplay.png';
import featuresIcon from '../../assets/images/icon_features.png';
import communityIcon from '../../assets/images/icon_community.png';
import newsIcon from '../../assets/images/icon_news.png';
import classes from './index.module.css';

const Home = () => {
    const history = useHistory();
    const [error, userInfo] = useUserInfo(history);

    const logoutHandler = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    const formatDate = (date) => {
        return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
    };

    return error ? (
        <ErrorMessage error={error} />
    ) : (
        <section className={classes.home}>
            {userInfo && (
                <UserInfo>
                    <UserInfoItem label="Username" value={userInfo.username} />
                    <UserInfoItem label="Email" value={userInfo.email} />
                    <UserInfoItem
                        label="Name"
                        value={`${userInfo.firstname} ${userInfo.lastname}`}
                    />
                    <UserInfoItem
                        label="Register time"
                        value={formatDate(userInfo.createdAt)}
                    />
                </UserInfo>
            )}
            <Menu>
                <MenuItem iconSrc={gameplayIcon} title="gameplay" />
                <MenuItem iconSrc={featuresIcon} title="features" />
                <MenuItem iconSrc={communityIcon} title="community" />
                <MenuItem iconSrc={newsIcon} title="news" />
                <LogoutButton onClick={logoutHandler} />
            </Menu>
            <BackgroundLogo className={classes['home-logo']} />
        </section>
    );
};

export default Home;
