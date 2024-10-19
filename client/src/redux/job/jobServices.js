import * as api from '../../api/jobAPI';
import { createJobFail, createJobSuccess, deleteJobFail, deleteJobSuccess, fetchAllJobsFail, fetchAllJobsSuccess, fetchJobsFail, fetchJobsSuccess, updateJobFail, updateJobSuccess, requestStart } from './jobSlice';


// create a new job
export const createJob = (formData, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart())
    try {
        const response = await api.createJobAPI(formData);
        if (response.success) {
            navigate('/viewJobs');
            showAlert(response.message)
            dispatch(createJobSuccess());
        }
        else {
            showAlert(response.message)
            dispatch(createJobFail())
        }

    } catch (error) {
        showAlert(error.message)
        dispatch(createJobFail())
    }

};



// action to fetch all job
export const fetchAllJob = (navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart())
    try {
        const response = await api.fetchAllJobAPI();
        if (response.success) {
            navigate('/viewJobs');
            showAlert(response.message)
            dispatch(fetchAllJobsSuccess(response.data));
        }
        else {
            showAlert(response.message)
            dispatch(fetchAllJobsFail())
        }

    } catch (error) {
        showAlert(error.message)
        dispatch(fetchJobsFail())
    }

};


// action to fetch the job with id
export const fetchJob = (id, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart())
    try {
        const response = await api.fetchAllJobAPI(id);
        if (response.success) {
            navigate('/viewJobs');
            showAlert(response.message)
            dispatch(fetchJobsSuccess(response.data));
        }
        else {
            showAlert(response.message)
            dispatch(fetchJobsFail())
        }

    } catch (error) {
        showAlert(error.message)
        dispatch(fetchJobsFail())
    }

};

// action to upate the job
export const updateJob = (formData, id, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart())
    try {
        const response = await api.updateJobAPI(formData, id);
        if (response.success) {
            navigate('/viewJobs')
            showAlert(response.message)
            dispatch(updateJobSuccess());
        }
        else {
            showAlert(response.message)
            dispatch(updateJobFail())
        }

    } catch (error) {
        showAlert(error.message)
        dispatch(updateJobFail())
    }

};

// action to delete the job
export const deleteJob = (id, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart());
    try {
        const response = await api.deleteJobAPI(id);
        if (response.success) {
            dispatch(deleteJobSuccess());
            showAlert(response.message);
            navigate('/viewJobs');
        } else {
            showAlert(response.message);
            dispatch(deleteJobFail());
        }
    } catch (error) {
        showAlert(error.message);
        dispatch(deleteJobFail());
    }
};


