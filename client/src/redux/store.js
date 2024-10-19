import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import jobReducer from './job/jobSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        job: jobReducer
    },
})