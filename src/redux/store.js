import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutFormSlice';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
    reducer: {
        storeCart: cartReducer,
        storeAuth: authReducer,
        storeCheckout: checkoutReducer,
        storeCategories: categoriesReducer
    }
});

export default store;
