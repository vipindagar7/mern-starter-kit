import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import { logout } from '../redux/auth/authServices';
import { useAlert } from '../contexts/AlertContext';
import { useDispatch } from 'react-redux';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout(navigate, showAlert));
    };

    return (
        <div className={`fixed inset-y-0 left-0 bg-white shadow-md md:shadow-none md:rounded-r-lg md:rounded-b-none flex flex-col justify-between h-screen transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} z-10`} style={{ width: '250px' }}>
            <div>
                <div className="flex items-center justify-center p-5 border-b">
                    <img src={logo} alt="Company Logo" className="h-12" />
                </div>
                <nav className="p-5">
                    <ul>
                        <li className="mb-2">
                            <Link to="/createJob" className="block text-gray-700 hover:bg-blue-100 p-2 rounded">
                                Create Job
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/viewJobs" className="block text-gray-700 hover:bg-blue-100 p-2 rounded">
                                View Jobs
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="p-5">
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
            <button
                className="absolute top-4 right-4 md:hidden"
                onClick={toggleSidebar}
                aria-label="Close Sidebar"
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default Sidebar;
