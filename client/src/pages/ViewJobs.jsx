import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJob, fetchAllJob } from '../redux/job/jobServices';
import { useAlert } from '../contexts/AlertContext';

const ViewJobs = () => {
    const user = useSelector((state) => state.auth.user.name);
    const jobs = useSelector((state) => state.job.jobs);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { showAlert } = useAlert();

    // Fetch jobs when the component mounts
    useEffect(() => {
        const fetchJobs = async () => {
            await dispatch(fetchAllJob(navigate, showAlert));
        };

        fetchJobs();
    }, [dispatch]);

    const handleDelete = async (id) => {
        dispatch(deleteJob(id, navigate, showAlert));
    };

    return (
        <div className="flex-1 p-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome back, {user}!</h2>
            <h2 className="text-xl font-bold mb-4 text-center">Job Listings</h2>

            {jobs.length === 0 ? (
                <div className="text-center text-gray-600">
                    <p>No jobs available!</p>
                    <Link
                        to="/createJob"
                        className="text-blue-600 hover:underline"
                    >
                        Create your first Job.
                    </Link>
                </div>
            ) : (
                <ul className="space-y-4">
                    {jobs.map((job) => (
                        <li key={job._id} className="bg-white shadow-md p-4 rounded">
                            <h3 className="font-semibold text-lg text-blue-600">{job.jobTitle}</h3>
                            <p>{job.jobDescription}</p>
                            <p className="text-gray-600">{job.companyName}</p>
                            <div className="mt-4">
                                <button
                                    onClick={() => handleDelete(job._id)}
                                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ViewJobs;
