import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:5000/api/",
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
