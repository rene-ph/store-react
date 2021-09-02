import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutFormSlice';

const store = configureStore({
    reducer: {
        storeCart: cartReducer,
        storeAuth: authReducer,
        storeCheckout: checkoutReducer
    }
});

export default store;
