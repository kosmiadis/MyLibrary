import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authorized: false,
    authorizedUser: null,
    loading: true
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        authPending: (state) => {
            state.loading = true;
        },
        authSuccessful: (state, action) => {
            state.authorizedUser = action.payload.user || null;
            state.authorized = true;
            state.loading = false;
        },
        resetAuth: (state) => {
            state.authorizedUser = null;
            state.authorized = false;
            state.loading = false;
        },
    }
})

export const { authPending, authSuccessful, resetAuth } = authSlice.actions

export default authSlice.reducer;

