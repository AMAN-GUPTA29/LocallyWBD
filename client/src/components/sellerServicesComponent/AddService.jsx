import React, { useState } from 'react';
import Navbar from '../sellerhomeComponent/Navbar';
import { Footer } from './Footer';

export const AddService = () => {

    const [Service, setService] = useState({});
    const [validationMessages, setValidationMessages] = useState({});

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        let message = '';
        if (name === 'serviceName' && value.length < 3) {
            message = 'Service Name must be at least 3 characters long';
        }

        if (name === 'serviceEmail' && !isValidEmail(value)) {
            message = 'Please enter a valid email address';
        }

        if (name === 'mobileNumber' && !isValidPhoneNumber(value)) {
            message = 'Please enter a valid mobile number';
        }

        if (name === 'description' && value.trim() === '') {
            message = 'Description cannot be empty';
        }
        setService((prev) => ({ ...prev, [name]: value }));
        setValidationMessages((prev) => ({ ...prev, [name]: message }));
        console.log(Service);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhoneNumber(phoneNumber) {
        return /^\d{10}$/.test(phoneNumber);
    }

    return (
        <div>
            <Navbar/>
            <div style={{
            display: 'flex',
            minHeight: '90vh',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <form style={{
                display: 'flex',
                minWidth: '500px',
                flexDirection: 'column',
                boxShadow: '0px 0px 15px grey',
                gap: '1.5rem',
                padding: '2rem',
                borderRadius: '0.25rem',
            }}>
                <h1 style={{ textAlign: 'center' }}>Add New Service</h1>
                <div className='flex items-center flex-col'>
                    <input type="text" name='serviceName' className='bg-white border-2 border-black' placeholder='Service Name' onChange={(e) => handleInputChange(e)} style={{
                        width: '80%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.25rem',
                        outline: 'none',
                    }} />
                    <span style={{ textAlign: 'center', fontSize: '0.75rem', color: 'red' }}>{validationMessages.serviceName}</span>
                </div>
                <div  className='flex items-center flex-col'>
                    <input type="email" name='serviceEmail' className='bg-white border-2 border-black' placeholder='Service Email' onChange={(e) => handleInputChange(e)} style={{
                        width: '80%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.25rem',
                        outline: 'none',
                    }} />
                    <span style={{ textAlign: 'center', fontSize: '0.75rem', color: 'red' }}>{validationMessages.serviceEmail}</span>
                </div>
                <div  className='flex items-center flex-col'>
                    <input type="tel" name='mobileNumber' className='bg-white border-2 border-black' placeholder='Mobile Number' onChange={(e) => handleInputChange(e)} style={{
                        width: '80%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.25rem',
                        outline: 'none',
                    }} />
                    <span style={{ textAlign: 'center', fontSize: '0.75rem', color: 'red' }}>{validationMessages.mobileNumber}</span>
                </div>
                <div  className='flex items-center flex-col'>
                    <textarea name="description" className='bg-white border-2 border-black' placeholder='Description' id="" cols="30" rows="10" onChange={(e) => handleInputChange(e)} style={{
                        width: '80%',
                        padding: '0.5rem 1rem',
                    }}></textarea>
                    <span style={{ textAlign: 'center', fontSize: '0.75rem', color: 'red' }}>{validationMessages.description}</span>
                </div>
                <button className='w-[80%] mx-auto' style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgb(42, 122, 243)',
                    borderRadius: '0.25rem',
                    color: 'white',
                    border: 'none',
                }}>Add Service</button>
            </form>
        </div>
        <Footer/>
        </div>
    );
};
