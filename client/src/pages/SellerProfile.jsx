import React, { useEffect, useState } from 'react';
import Navbar from '../components/sellerhomeComponent/Navbar';
import { AiFillLike } from "react-icons/ai";
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const SellerProfile = () => {
    const token = cookie.get("TOKEN");
    const [seller, setSeller] = useState({
        name: "",
        email: "",
        phone: "",
        address:"",
        pin:"",
        img:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSeller(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = ()=>{
        fetch('http://localhost:8080/api/seller/profile/update',{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            body: JSON.stringify(seller),
        }).then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error('Error fetching data:', error));
    }
    useEffect(() => {
        console.log(token);
        fetch('http://localhost:8080/api/seller/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            if(data.message === "founduser"){
                data = data.data
                setSeller(prevState => ({
                    ...prevState,
                    name: data.name,
                    email:data.email,
                    phone:data.phone,
                    address:data.address,
                    pin:data.pin,
                    img:data.img
                }));
            }
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <div>
            <Navbar />
            <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 font-serif">
                <h1 className='text-3xl my-4'>Your Profile</h1>
                <div className='p-8 shadow-xl w-[400px] rounded-md bg-white'>
                    <div className='flex items-center justify-center'>
                        <img src={seller.img} className='w-32 rounded-full' alt="" />
                    </div>
                    {/* <div className='mt-2 text-2xl flex items-baseline justify-center'>
                        <AiFillLike />
                        <p>{seller.likes}</p>

                    </div> */}
                    <div className='mb-4 flex flex-col items-start'>
                        <label className='block mb-1 text-gray-700'>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={seller.name}
                            onChange={handleChange}
                            className="w-full bg-white  border border-gray-300 rounded-md p-2"                        />
                    </div>
                    <div className='mb-4 flex flex-col items-start'>
                        <label className='block mb-1 text-gray-700'>Email:</label>
                        <div>{seller.email}</div>
                        {/* <input
                            type="email"
                            name="email"
                            value={seller.email}
                            onChange={handleChange}
                            className="w-full bg-white  border border-gray-300 rounded-md p-2"
                        /> */}
                    </div>
                    <div className='mb-4 flex flex-col items-start'>
                        <label className='block mb-1 text-gray-700'>Phone Number:</label>
                        <input
                            type="text"
                            name="phone"
                            value={seller.phone}
                            onChange={handleChange}
                            className="w-full bg-white  border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className='mb-4 flex flex-col items-start'>
                        <label className='block mb-1 text-gray-700'>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={seller.address}
                            onChange={handleChange}
                            className="w-full bg-white  border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className='mb-4 flex flex-col items-start'>
                        <label className='block mb-1 text-gray-700'>Pincode:</label>
                        <input
                            type="text"
                            name="pincode"
                            value={seller.pin}
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
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellerProfile;
