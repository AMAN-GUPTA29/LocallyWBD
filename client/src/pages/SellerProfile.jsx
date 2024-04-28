import React, { useState } from 'react';
import Navbar from '../components/sellerhomeComponent/Navbar';
import { AiFillLike } from "react-icons/ai";

const SellerProfile = () => {
    const [seller, setSeller] = useState({
        name: "Chaitanya Krishna",
        email: "krishnachaitanya@gmail.com",
        phoneNumber: "9347980742",
        likes: 100
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSeller(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
                <h1 className='text-3xl mb-8'>Your Profile</h1>
                <div className='p-8 shadow-xl w-[400px] rounded-md bg-white'>
                    <div className='flex items-center justify-center'>
                        <img src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png" className='w-32' alt="" />
                    </div>
                    <div className='mt-2 text-2xl flex items-baseline justify-center'>
                        <AiFillLike />
                        <p>{seller.likes}</p>

                    </div>
                    <div className='mb-4 flex flex-col items-start'>
                        <label className='block mb-1 text-gray-700'>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={seller.name}
                            onChange={handleChange}
                            className="w-full bg-white focus:border-sky-500 focus:border-2 focus:ring-1 rounded-md p-2"
                        />
                    </div>
                    <div className='mb-4 flex flex-col items-start'>
                        <label className='block mb-1 text-gray-700'>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={seller.email}
                            onChange={handleChange}
                            className="w-full bg-white  border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className='mb-4 flex flex-col items-start'>
                        <label className='block mb-1 text-gray-700'>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={seller.phoneNumber}
                            onChange={handleChange}
                            className="w-full bg-white  border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    {/* <div className='mb-4 flex flex-col items-start'>
                        <label className='block mb-1 text-gray-700'>Likes:</label>
                        <input
                            type="number"
                            name="likes"
                            value={seller.likes}
                            onChange={handleChange}
                            className="w-full bg-white  border border-gray-300 rounded-md p-2"
                            readOnly
                        />
                    </div> */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellerProfile;
