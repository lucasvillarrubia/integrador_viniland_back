import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "../features/categories/categoriesSlice";
import productsReducer from "../features/products/productsSlice";
import recommendationsReducer from "../features/recommended/recoSlice";
import cartReducer from "../features/cart/cartSlice";

const reducers = combineReducers({
        categories: categoriesReducer,
        products: productsReducer,
        recommendations: recommendationsReducer,
        cart: cartReducer
})

const persistConfig = { key: 'root', storage, whitelist: ['cart'] }

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);