import React, { useState } from 'react';
import { FaEnvelope, FaKey, FaGoogle, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';


const SellerLoginForm = () => {
  const {login} = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}$");;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Email validation
    if (!validateEmail(formData.email)) {
      setErrors({ email: 'Invalid email format' });
      return;
    }
  
    // Password validation
    if (!validatePassword(formData.password)) {
      setErrors({
        email: '',
        password: 'Password must have capital, small, numeric, and special characters.',
      });
      return;
    }
  
    // Resetting errors
    setErrors({ email: '', password: '' });
  
    try {
      const response = await fetch('http://localhost:8080/api/seller/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
  
      if (data.message  === "logged in successfully") {
        // Login successful
        console.log('Login successful:', data);
        // Redirect to '/sellerview'
        login(data.data);
        navigate('/sellerview');
      } else {
        // Login failed
        alert("Email is not found please register")
        console.log('Login failed:', data.message);
        // Handle error (e.g., display error message)
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error (e.g., display error message)
    }
  };
  
  

  return (
    <div className="min-h-screen w-96 m-auto flex flex-col items-center justify-center">
      <form className=" px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold mb-6 text-center">Seller Login</h1>
        <div className="flex flex-col mt-1">
          <label className="text-lg">
            Email
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FaEnvelope className="text-gray-400" />
            </span>
            <input
              className={`appearance-none border indent-4 ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-lg" >
            Password
          </label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FaKey className="text-gray-400" />
            </span>
            <input
              className={`appearance-none border indent-4 ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        <div className="input-group  mt-5">
          <button
            className="bg-black w-full hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-lg">
        Don't have an account? <a href="/seller/register"> Register</a>
      </div>
      <div className="input-group2">
        <div className="divider flex w-80 ml-10 mt-10">
          <hr className="inline-block w-1/3 align-self-center mt-3" />
          <p className='mx-5'>or</p>
          <hr className="inline-block w-1/3 align-self-center mt-3" />
        </div>
        <div className="brands flex justify-center mt-5">
          <FaGoogle className="text-3xl cursor-pointer mr-6" />
          <FaTwitter className="text-3xl cursor-pointer mr-6" />
          <FaInstagram className="text-3xl cursor-pointer mr-6" />
        </div>
      </div>
    </div>
  );
};

export default SellerLoginForm;
