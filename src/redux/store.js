import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice';
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        cartReducer: cartReducer,
        authReducer: authReducer
    }
});

export default store;
