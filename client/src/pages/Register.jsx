import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setSuccessMessage('Registration successful!');

    // Mock registration logic (replace with API call)
    console.log('User registered:', { email, password });

    // Reset the form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 top-6 right-3 flex items-center text-gray-500 focus:outline-none"
            >
              {showPassword ? <IoMdEyeOff size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 top-6 right-3 flex items-center text-gray-500 focus:outline-none"
            >
              {showConfirmPassword ? <IoMdEyeOff size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <Button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
