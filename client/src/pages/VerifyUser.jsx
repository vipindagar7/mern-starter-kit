import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAlert } from '../contexts/AlertContext';
import { verifyUser } from '../redux/auth/authServices';


const VerifyUser = () => {
    const { token } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { showAlert } = useAlert();

    useEffect(() => {
        dispatch(verifyUser(token, navigate, showAlert));

    }, [])


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Verifying user</h2>

                {/* Back to Login */}
                <div>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Remembered your password?{' '}
                        <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Back to Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyUser;
