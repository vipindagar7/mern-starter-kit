import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAlert } from '../contexts/AlertContext';
import { useDispatch, useSelector } from 'react-redux';
import { createJob } from '../redux/job/jobServices';

const JobForm = () => {
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const dispatch = useDispatch();

    const userId = useSelector((state) => state.auth.user._id); // assuming user is stored under auth.user
    const companyName = useSelector((state) => state.auth.user.companyName)
    const [data, setData] = useState({
        jobTitle: "",
        jobDescription: "",
        experienceLevel: "",
        candidates: [],
        endDate: "",
        companyName: companyName
    });

    const [candidateEmail, setCandidateEmail] = useState(""); // Track candidate email input separately

    // Handle change for inputs
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    // Handle adding candidate to the list
    const addCandidate = () => {
        if (candidateEmail && !data.candidates.includes(candidateEmail)) {
            setData({
                ...data,
                candidates: [...data.candidates, candidateEmail],
            });
            setCandidateEmail("");
        }
    };

    // Handle removing a candidate from the list
    const removeCandidate = (emailToRemove) => {
        setData({
            ...data,
            candidates: data.candidates.filter(email => email !== emailToRemove),
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure correct data structure
        const formattedData = {
            jobTitle: data.jobTitle,
            jobDescription: data.jobDescription,
            experienceLevel: data.experienceLevel,
            candidates: data.candidates,
            companyName: data.companyName,
            endDate: new Date(data.endDate),
            createdBy: userId,
        };



        // Dispatch the action or send the data (replace with your action or API call)
        dispatch(createJob(formattedData, navigate, showAlert));
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-6 text-center">Post a Job</h2>

                {/* Job Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={data.jobTitle}
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter Job Title"
                    />
                </div>

                {/* Job Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job Description</label>
                    <textarea
                        name="jobDescription"
                        value={data.jobDescription}
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="4"
                        placeholder="Enter Job Description"
                    />
                </div>

                {/* Job Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        value={data.companyName}
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter Job Title"
                    />
                </div>

                {/* Experience Level */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Experience Level</label>
                    <select
                        name="experienceLevel"
                        value={data.experienceLevel}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Select Experience Level</option>
                        <option value="Junior">Junior</option>
                        <option value="Mid">Mid</option>
                        <option value="Senior">Senior</option>
                    </select>
                </div>

                {/* Add Candidates */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Add Candidate</label>
                    <div className="flex">
                        <input
                            type="email"
                            value={candidateEmail}
                            onChange={(e) => setCandidateEmail(e.target.value)}

                            className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="xyz@gmail.com"
                        />
                        <button
                            type="button"
                            onClick={addCandidate}
                            className="px-3 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="mt-3">
                        {data.candidates.map((email, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-200 p-2 mt-2 rounded-lg">
                                {email}
                                <button
                                    type="button"
                                    onClick={() => removeCandidate(email)}
                                    className="text-red-500 hover:text-red-600"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* End Date */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={data.endDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send
                    </button>
                    <Link
                        to="/viewJobs"
                        className="mx-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Back
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default JobForm;
