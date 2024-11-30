import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './books/booksSlice.js';
import authReducer from './authSlice.js';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        auth: authReducer
    },    
})