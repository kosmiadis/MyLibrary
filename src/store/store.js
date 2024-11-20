import { configureStore } from "@reduxjs/toolkit";
import myBooksReducer from '../store/books/myBooksSlice.js';
import wishListReducer from '../store/books/wishlist.js';

export const store = configureStore({
    reducer: {
        myBooks: myBooksReducer,
        wishlist: wishListReducer,
    },    
})