import { API, STORE_END_POINT } from './config';

const AuthService = {
    login: (config) => {
        return API.post(`${STORE_END_POINT.LOGIN}`, config)
                .then(response => response.data);
    },
    get_user: (payload) => {
        return API.post(`${STORE_END_POINT.GET_USER}`, payload)
                .then(response => response.data);
    }
};

export default AuthService;
