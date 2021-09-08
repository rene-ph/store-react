import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: 'json',
    timeout: 10000
});

const STORE_END_POINT = {
    LOGIN: 'auth/login/',
    REGISTER: 'auth/',
    GET_USER: 'auth/',
    STORE_COLLECTIONS: 'store/collections/',
};

export { API, STORE_END_POINT };
