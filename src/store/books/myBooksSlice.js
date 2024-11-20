import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myBooks: [],
}

const myBooksSlice = createSlice({
    name: 'myBooksSlice',
    initialState,
    reducers: {
        updateMyBooks: (state, action) => {
            state.myBooks = action.payload.books;
        }
    }
})

export const { updateMyBooks } = myBooksSlice.actions;

export default myBooksSlice.reducer;