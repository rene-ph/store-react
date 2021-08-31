import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/redux/cartSlice';

const store = configureStore({
    reducer: {
        cartReducer: cartReducer
    }
});

export default store;
