import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    error: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        requestStart: (state) => {
            state.loading = true;
            state.error = null
        },
        loginSuccess: (state) => {
            state.loading = false;
            state.isAuthenticated = true;
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.error;
        },
        signupSuccess: (state) => {
            state.loading = false;
        },
        signupFail: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        forgotPasswordRequestSuccess: (state) => {
            state.loading = false;
        },
        forgotPasswordRequestFail: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        forgotPasswordSuccess: (state) => {
            state.loading = false;
        },
        forgotPasswordFail: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        getUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.error;
            state.user = action.payload.data;

        },
        getUserFail: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        logoutSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.error;
        },
        logoutFail: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        forgotPasswordRequestSuccess: (state) => {
            state.loading = false;
        },
        forgotPasswordRequestFail: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        forgotPasswordSuccess: (state) => {
            state.loading = false;
        },
        forgotPasswordFail: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        verifyUserSuccess: (state) => {
            state.loading = false;
        },
        verifyUserFail: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },



    }

})

export const {
    requestStart,
    loginSuccess,
    loginFail,
    signupSuccess,
    signupFail,
    getUserSuccess,
    getUserFail,
    logoutSuccess,
    logoutFail,
    forgotPasswordRequestSuccess,
    forgotPasswordRequestFail,
    forgotPasswordSuccess,
    forgotPasswordFail,
    verifyUserSuccess,
    verifyUserFail,
} = authSlice.actions;

export default authSlice.reducer;