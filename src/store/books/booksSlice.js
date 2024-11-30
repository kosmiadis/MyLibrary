import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
}

const booksSlice = createSlice({
    name: 'booksSlice',
    initialState,
    reducers: {
        updateBooks: (state, action) => {
            state.books = action.payload.books;
        },
    }
})

export const { updateBooks, updateIsPending, updateIsError, updateError } = booksSlice.actions;

export default booksSlice.reducer;