import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../components/adminLandingPageComponent/adminimages/login_bg.jpg'


const AdminRegister = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
  
    if (!formData.name.trim()) {
      alert('Username is required')
      newErrors.name = 'Username is required';
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      alert('Invalid email format')
      newErrors.email = 'Invalid email format';
    }
  
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password.trim())) {
      alert('Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter')
      newErrors.password = 'Invalid password format';
    }
  
    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        try {
            const response = await fetch('http://localhost:8080/api/admin/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log("data : ",data)

            if (data.message === "User created Succesfully") {
              console.log("user created")
                navigate('/adminLogin');
            }else {
              alert("Email already exists from alse")
              console.log(data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }
};

   
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/>
            </svg>
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Create a new account</h2>
        <p className="text-gray-600 text-center mb-6">Enter your details to register.</p>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
            <input 
            type="name" 
            id="name" 
            name="name" 
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" 
            required placeholder="James Brown" 
            value={formData.name} 
            onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
            <input 
            id="email" 
            type="email" 
            name="email" 
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="hello@alignui.com" 
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••" 
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" 
            />
            <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter,1 uppercase letter,1 special character, 1 number, min. 8 characters.</p>
          </div>
          <button 
          type="submit" 
          onClick={handleSubmit} 
          value="REGISTER"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >Register</button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
