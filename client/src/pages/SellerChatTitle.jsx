import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'universal-cookie';
import '../components/sellerhomeComponent/CSS/Chat.css';
import Navbar from '../components/sellerhomeComponent/Navbar';
import { motion } from 'framer-motion';
const cookie = new Cookies();

const SellerChatTitle = () => {
    const token = cookie.get("TOKEN");
    const [titles, setTitles] = useState([]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const containerStyle = {
        margin: '1rem 0',
        textAlign: 'center',
    };

    const flexContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        rowGap: '3rem',
        columnGap: '4rem',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const itemStyle = {
        height: 'auto',
        borderRadius: '0.25rem',
        padding: '1rem',
        boxShadow: '0px 0px 10px grey',
        textAlign: 'center',
    };

    const linkStyle = {
        padding: '0.75rem 1rem',
        borderRadius: '0.25rem',
        display: 'block',
        width: '8rem',
        border: 'none',
        textDecoration: 'none',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgb(0, 115, 255)',
        margin: '2rem auto',
    };

    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:8080/api/seller/chattile", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data.data);
                    setTitles(data.data);
                    // console.log(data.data)
                })
                .catch(error => console.error(error));
        };

        fetchData();

        //   const interval = setInterval(() => {
        //       fetchData();
        //   }, 1000);

        //   return () => clearInterval(interval);
    }, []);



    return (
        <div>
            <Navbar />
            <div style={containerStyle} >
            <h1 className='text-3xl font-bold font-serif my-5'>Serviced Consumers</h1>

                <motion.div className='flex flex-row flex-wrap gap-7 '>
                    {titles && titles.map((title, index) => (
                        <a href={`/seller/chat/${title.customerid._id}`}>
                            <motion.div
                            variants={itemVariants}
                            style={itemStyle}
                            key={index}
                            className='bg-gradient-to-r from-green-400 to-gray-400 mx-5 text-lg'
                        >
                            <div className='font-serif px-5 py-2 text-start'>Customer Name : {title.customerid.name}</div>
                            <div className='font-serif px-5 py-2 text-start'>Phone : {title.customerid.phone}</div>
                            <div className='font-serif px-5 py-2 text-start'>Address : {title.customerid.address}</div>
                        </motion.div>
                        </a>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default SellerChatTitle;
