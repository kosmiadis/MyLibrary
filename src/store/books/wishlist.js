import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
}

const wishlistSlice = createSlice({
    name: 'wishlistSlice',
    initialState,
    reducers: {
        updateWishlist: (state, action) => {
            state.wishlist = action.payload.books;
        }
    }
})

export const { updateWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;