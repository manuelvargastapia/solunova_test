import { useState, useEffect } from 'react';
import { getUserInfo } from '../../../helpers/api';

const useUserInfo = (history) => {
    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        if (!localStorage.getItem('authToken')) {
            history.push('/login');
        }

        const fetchUserInfo = async () => {
            try {
                const authToken = localStorage.getItem('authToken');
                const userInfo = await getUserInfo(authToken);
                setUserInfo(userInfo);
            } catch (_) {
                localStorage.removeItem('authToken');
                setError("You're not authorized. Please, log in");
            }
        };

        fetchUserInfo();
    }, [history]);

    return [error, userInfo];
};

export default useUserInfo;
