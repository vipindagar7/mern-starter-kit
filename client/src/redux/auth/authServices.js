import * as api from '../../api/authAPI';
import { requestStart, loginSuccess, loginFail, signupSuccess, signupFail, getUserSuccess, getUserFail, logoutFail, logoutSuccess, forgotPasswordRequestSuccess, forgotPasswordRequestFail, forgotPasswordSuccess, forgotPasswordFail, verifyUserSuccess, verifyUserFail } from './authSlice';



export const signin = (formData, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart())
    try {
        const response = await api.signinAPI(formData);
        if (response.success) {
            navigate('/viewJobs');
            showAlert(response.message)
            dispatch(loginSuccess());
        }
        else {
            showAlert(response.message)
            dispatch(loginFail())
        }

    } catch (error) {
        showAlert(error.message)
        dispatch(loginFail())
    }

};

export const signup = (formData, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart())
    try {
        const response = await api.signupAPI(formData);
        if (response.success) {
            navigate('/login')
            showAlert(response.message)
            dispatch(signupSuccess());
        }
        else {
            showAlert(response.message)
            dispatch(signupFail())
        }

    } catch (error) {
        showAlert(error.message)
        dispatch(signupFail())
    }

};

export const getUser = (navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart())
    try {
        const response = await api.getUserDetailsAPI();
        if (response.success) {
            showAlert(response.message)
            dispatch(getUserSuccess(response.data));
        }
        else {
            navigate('/login')
            showAlert(response.message)
            dispatch(getUserFail())
        }

    } catch (error) {
        navigate('/login')
        showAlert(error.message)
        dispatch(getUserFail())
    }
};


export const logout = (navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart());
    try {
        const response = await api.logoutAPI();
        if (response.success) {
            dispatch(logoutSuccess());  // First, handle the success state
            showAlert(response.message);  // Show the alert message
            navigate('/login');  // Then, redirect to the home page
        } else {
            showAlert(response.message);
            dispatch(logoutFail());
        }
    } catch (error) {
        showAlert(error.message);
        dispatch(logoutFail());
    }
};


export const forgotPasswordRequest = (formData, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart());
    try {
        const response = await api.forgotPasswordRequestAPI(formData);
        if (response.success) {
            dispatch(forgotPasswordRequestSuccess());
            showAlert(response.message);
            navigate('/login');
        } else {
            showAlert(response.message);
            dispatch(forgotPasswordRequestFail());
        }
    } catch (error) {
        showAlert(error.message);
        dispatch(forgotPasswordRequestFail());
    }
};

export const forgotPassword = (formData, token, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart());
    try {
        const response = await api.forgotPasswordAPI(formData, token);
        if (response.success) {
            dispatch(forgotPasswordSuccess());
            showAlert(response.message);
            navigate('/login');
        } else {
            showAlert(response.message);
            dispatch(forgotPasswordFail());
        }
    } catch (error) {
        showAlert(error.message);
        dispatch(forgotPasswordFail());
    }
};


export const verifyUser = (token, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart());
    try {
        const response = await api.verifyUserAPI(token);
        if (response.success) {
            dispatch(verifyUserSuccess());
            showAlert(response.message);
            navigate('/login');
        } else {
            showAlert(response.message);
            dispatch(verifyUserFail());
        }
    } catch (error) {
        showAlert(error.message);
        dispatch(verifyUserFail());
    }
};


