import { API, STORE_END_POINT } from './config';

const AuthService = {
    login: (payload) => {
        return API.post(`${STORE_END_POINT.LOGIN}`, payload)
                .then(response => response.data);
    },
    get_user: (payload) => {
        return API.post(`${STORE_END_POINT.GET_USER}`, payload)
                .then(response => response.data);
    },
    signup:  (payload) => {
        return API.post(`${STORE_END_POINT.REGISTER}`, payload)
                .then(response => response.data);
    }
};

export default AuthService;
