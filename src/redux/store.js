import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutFormSlice';
import categoriesReducer from './categoriesSlice';
import rootReducer from './rootSlice';
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    devTools: true,
    reducer: {
        storeCart: cartReducer,
        storeAuth: authReducer,
        storeCheckout: checkoutReducer,
        storeCategories: categoriesReducer,
        storeRoot: rootReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
