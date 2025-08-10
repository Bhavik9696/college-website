import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submit logic here
    alert("Registration submitted!");
  };

  return (
    <div className="min-h-screen bg-white text-white flex items-center justify-center px-6 py-10 dark:bg-gray-900 dark:text-white transition-colors ">
      <div className="w-full max-w-md bg-blue-200 rounded-lg shadow-lg p-8 border-2 border-gray-600 text-black  dark:text-white dark:bg-gray-900 transition-colors">
        <h1 className="text-3xl font-bold mb-6 text-orange-400 font-serif text-center">
          Register at BBCD College
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block mb-2 font-semibold ">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="example@domain.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-2 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Re-enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
