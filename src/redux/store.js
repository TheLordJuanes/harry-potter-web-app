import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
}

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: persistedUserReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);