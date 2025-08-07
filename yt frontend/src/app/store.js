import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import loginReducer from '../slices/loginSlice'
import urlReducer from '../slices/urlSlice'
import VideoCard from "../components/video_components/VideoCard";
import videoReducer from "../slices/videoSlice"

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

// import persistReducer from "redux-persist/es/persistReducer";

const presistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(presistConfig, loginReducer)


export const store = configureStore({
    reducer: {
        login: persistedReducer,
        url: urlReducer,
        videosDetails: videoReducer
    },

    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const presistor = persistStore(store)