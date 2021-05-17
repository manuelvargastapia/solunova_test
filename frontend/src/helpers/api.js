import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

const getUserInfo = async (authToken) => {
    try {
        const { data } = await axiosInstance({
            method: 'GET',
            url: '/api/users',
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return data.data.user;
    } catch (error) {
        throw error;
    }
};

const login = async ({ usernameOrEmail, password }) => {
    const credentials = {};
    if (usernameOrEmail.includes('@')) {
        credentials.email = usernameOrEmail;
    } else {
        credentials.username = usernameOrEmail;
    }

    try {
        const { data } = await axiosInstance({
            method: 'POST',
            url: '/api/login',
            data: { ...credentials, password },
        });
        return data.token;
    } catch (error) {
        throw error.response.data.data.error;
    }
};

const register = async ({ username, firstname, lastname, email, password }) => {
    try {
        const { data } = await axiosInstance({
            method: 'POST',
            url: '/api/users',
            data: {
                username,
                firstname,
                lastname,
                email,
                password,
            },
        });
        return data.token;
    } catch (error) {
        throw error.response.data.data.error;
    }
};

export { getUserInfo, login, register };
