import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    jobs: [],
    error: null,
}

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        requestStart: (state) => {
            state.loading = true;
            state.error = null
        },
        createJobSuccess: (state) => {
            state.loading = false;
        },
        createJobFail: (state) => {
            state.loading = false;
        },
        fetchJobsSuccess: (state) => {
            state.jobs = action.job
        },
        fetchJobsFail: (state) => {
            state.loading = false;
        },
        fetchAllJobsSuccess: (state, action) => {
            state.loading = false;
            console.log(action)
            state.jobs = action.payload.data

        },
        fetchAllJobsFail: (state) => {
            state.loading = false;
        },
        deleteJobSuccess: (state) => {
            state.loading = false;
        },
        deleteJobFail: (state) => {
            state.loading = false;
        },
        updateJobSuccess: (state) => {
            state.loading = false;
        },
        updateJobFail: (state) => {
            state.loading = false;
        },

    }

})

export const {
    requestStart,
    createJobSuccess,
    createJobFail,
    fetchJobsSuccess,
    fetchJobsFail,
    fetchAllJobsSuccess,
    fetchAllJobsFail,
    deleteJobSuccess,
    deleteJobFail,
    updateJobSuccess,
    updateJobFail,

} = jobSlice.actions;

export default jobSlice.reducer;