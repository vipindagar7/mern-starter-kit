import { apiError, apiResponse } from './utils';
import apiClient from './axios';


export const createJobAPI = async (formData) => {

    try {
        // creating a post request
        const response = await apiClient.post('/api/job/createJob', formData, { withCredentials: true });
        // Process the response using apiResponse
        return apiResponse(response);
    } catch (error) {
        // Handle the error using apiError
        return apiError(error);
    }
};


export const fetchAllJobAPI = async (formData) => {

    try {
        // creating a post request
        const response = await apiClient.post('/api/job/getAllJobs', formData, { withCredentials: true });
        // Process the response using apiResponse
        return apiResponse(response);
    } catch (error) {
        // Handle the error using apiError
        return apiError(error);
    }
};

export const fetchJobAPI = async (formData, id) => {

    try {
        // creating a post request
        const response = await apiClient.post(`/api/job/getJob/${id}`, formData, { withCredentials: true });
        // Process the response using apiResponse
        return apiResponse(response);
    } catch (error) {
        // Handle the error using apiError
        return apiError(error);
    }
};



export const updateJobAPI = async (formData, id) => {

    try {
        // creating a post request
        const response = await apiClient.post(`/api/job/updateJob/${id}`, formData, { withCredentials: true });
        // Process the response using apiResponse
        return apiResponse(response);
    } catch (error) {
        // Handle the error using apiError
        return apiError(error);
    }
};


export const deleteJobAPI = async (id) => {

    try {
        // creating a post request
        const response = await apiClient.delete(`/api/job/deleteJob/${id}`, {}, { withCredentials: true });
        // Process the response using apiResponse
        return apiResponse(response);
    } catch (error) {
        // Handle the error using apiError
        return apiError(error);
    }
};




