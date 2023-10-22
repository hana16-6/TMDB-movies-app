import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./movies/moviesSlice";
export const store = configureStore({
    reducer: {
        moviesReducer
    },
    devTools: process.env.toString() !== 'production',
})
