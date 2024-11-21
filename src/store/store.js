import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './books/booksSlice.js';

export const store = configureStore({
    reducer: {
        books: booksReducer,
    },    
})