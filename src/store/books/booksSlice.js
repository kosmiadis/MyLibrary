import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    isPending: false,
    isError: false,
}

const booksSlice = createSlice({
    name: 'booksSlice',
    initialState,
    reducers: {
        updateBooks: (state, action) => {
            state.books = action.payload.books;
        },
        updateIsPending: (state, action) => {
            state.isPending = action.payload.isPending
        },
        updateIsError: (state, action) => {
            state.isError = action.payload.isError
        },
    }
})

export const { updateBooks, updateIsPending, updateIsError } = booksSlice.actions;

export default booksSlice.reducer;