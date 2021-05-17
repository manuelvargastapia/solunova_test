import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserInfo = (history) => {
    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState();

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

    return [error, userInfo];
};

export default useUserInfo;
