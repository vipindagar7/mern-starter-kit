import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAlert } from '../contexts/AlertContext';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/auth/authServices';

const Signup = () => {
  const [creds, setCreds] = useState({ name: '', email: '', password: '', companyName: '', employeSize: '', phone: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const handleChange = (e) => {
    e.preventDefault();
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(creds, navigate, showAlert))
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Signup</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-sm text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={creds.name}
              onChange={handleChange}
              required
              className="mt-0 p-0 block w-full font-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-sm text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={creds.email}
              onChange={handleChange}
              required
              className="mt-0 p-0 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          {/* Email Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-sm text-gray-700">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={creds.phone}
              onChange={handleChange}
              required
              className="mt-0 p-0 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          {/* Employe Size */}
          <div>
            <label htmlFor="email" className="block text-sm font-sm text-gray-700">
              Employe Size
            </label>
            <input
              type="number"
              name="employeSize"
              id="employeSize"
              value={creds.employeSize}
              onChange={handleChange}
              required
              className="mt-0 p-0 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          {/* Company Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-sm text-gray-700">
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={creds.companyName}
              onChange={handleChange}
              required
              className="mt-0 p-0 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-sm text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={creds.password}
              onChange={handleChange}
              required
              className="mt-0 p-0 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        {/* Signup Link */}
        <div>

          <p className="mt-00 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup