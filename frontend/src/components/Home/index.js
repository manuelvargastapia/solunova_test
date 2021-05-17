import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
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
    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState();
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem('authToken')) {
            history.push('/login');
        }

        const fetchUserInfo = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem(
                        'authToken'
                    )}`,
                },
            };

            try {
                const { data } = await axios.get('/api/users', config);
                setUserInfo(data.data.user);
            } catch (error) {
                localStorage.removeItem('authToken');
                setError("You're not authorized. Please, log in");
            }
        };

        fetchUserInfo();
    }, [history]);

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
