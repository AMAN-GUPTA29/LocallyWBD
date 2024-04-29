import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import Navbar from '../sellerhomeComponent/Navbar';
import { Footer } from './Footer';
const cookie = new Cookies();

export const AddService = () => {
    const token = cookie.get("TOKEN")
    const [service, setService] = useState({
        title: '',
        tag: '',
        charge: '',
        description: ''
    });
    const [validationMessages, setValidationMessages] = useState({});

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        let message = '';
        if (name === 'title' && value.length < 3) {
            message = 'Service Name must be at least 3 characters long';
        }

        if (name === 'tag' && value.trim() === '') {
            message = 'Tag cannot be empty';
        }

        if (name === 'charge' && isNaN(value)) {
            message = 'Charge must be a number';
        }

        if (name === 'description' && value.trim() === '') {
            message = 'Description cannot be empty';
        }
        setService((prev) => ({ ...prev, [name]: value }));
        setValidationMessages((prev) => ({ ...prev, [name]: message }));
    }

    const addService = (e) => {
        // e.preventDefault(); 
        const isValid = Object.values(validationMessages).every((msg) => msg === '');
    
        if (!isValid) {
            console.error('Form validation failed');
            return;
        }
        console.log(service)
    
        fetch("http://localhost:8080/api/seller/services/addservice", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                title: service.title ,
                tag: service.tag,
                charge: service.charge,
                description: service.description
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            setValidationMessages({});
        })
        .catch(error => console.error('Error fetching data:', error));
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
                <form onSubmit={addService} action='/seller/services' style={{
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
                        <input type="text" name='title' className='bg-white border-2 border-black' placeholder='Service Name' onChange={(e) => handleInputChange(e)} style={{
                            width: '80%',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.25rem',
                            outline: 'none',
                        }} />
                        <span style={{ textAlign: 'center', fontSize: '0.75rem', color: 'red' }}>{validationMessages.title}</span>
                    </div>
                    <div className='flex items-center flex-col'>
                        <input type="text" name='tag' className='bg-white border-2 border-black' placeholder='Tag' onChange={(e) => handleInputChange(e)} style={{
                            width: '80%',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.25rem',
                            outline: 'none',
                        }} />
                        <span style={{ textAlign: 'center', fontSize: '0.75rem', color: 'red' }}>{validationMessages.tag}</span>
                    </div>
                    <div className='flex items-center flex-col'>
                        <input type="text" name='charge' className='bg-white border-2 border-black' placeholder='Charge' onChange={(e) => handleInputChange(e)} style={{
                            width: '80%',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.25rem',
                            outline: 'none',
                        }} />
                        <span style={{ textAlign: 'center', fontSize: '0.75rem', color: 'red' }}>{validationMessages.charge}</span>
                    </div>
                    <div className='flex items-center flex-col'>
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
