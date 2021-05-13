import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ErrorMessage from '../UI/ErrorMessage';
import Card from '../UI/Card';
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

    return error ? (
        <ErrorMessage error={error} />
    ) : (
        <section className={classes.home}>
            {userInfo && (
                <Card>
                    <div>Username: {userInfo.username}</div>
                    <div>Email: {userInfo.email}</div>
                    <div>
                        Name: {userInfo.firstname} {userInfo.lastname}
                    </div>
                    <div>Uuid: {userInfo.uuid}</div>
                    <div>Register time: {userInfo.createdAt}</div>
                    <div>Last update: {userInfo.updatedAt}</div>
                    <button onClick={logoutHandler}>Logout</button>
                </Card>
            )}
        </section>
    );
};

export default Home;
