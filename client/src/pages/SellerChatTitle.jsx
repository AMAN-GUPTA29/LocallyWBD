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
            <div style={containerStyle}>

            <motion.div  className='flex flex-row flex-wrap gap-7'>
            {titles && titles.map((title,index)=>(
                    <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                    key={index}
                >
                    <a href={`/seller/chat/${title.customerid}`} style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Customer Id : {title.customerid}</a>
                    <div>Seller Id : {title.sellerid}</div>
                </motion.div>
                ))}
                {/* <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                >
                    <img src={plumberpng} alt="" style={{ width: '200px', height: '50%' }} />
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Plumber</p>
                    <p style={{ fontSize: '0.95rem' }}>As a dedicated plumbing title provider, I bring expertise in diagnosing, repairing, and maintaining plumbing systems. With a commitment to prompt and efficient title, I tackle issues ranging from leaks and clogs to pipe installations, ensuring optimal functionality for residential and commercial clients. Trust in my skillset to deliver reliable solutions.</p>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                >
                    <img src={electricianpng} alt="" style={{ width: '200px', height: '50%' }} />
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Electrician</p>
                    <p style={{ fontSize: '0.95rem' }}>As a seasoned electrician title provider, I specialize in delivering top-notch electrical solutions for residential and commercial needs. With a focus on safety and precision, I handle installations, repairs, and maintenance of electrical systems. Count on my expertise to ensure your property is equipped with efficient and secure electrical infrastructure.</p>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                >
                    <img src={carpenterpng} alt="" style={{ width: '200px', height: '50%' }} />
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Carpenter</p>
                    <p style={{ fontSize: '0.95rem' }}>As a skilled carpenter title provider, I offer tailored woodworking solutions for diverse projects. From crafting custom furniture to executing precise installations, my expertise enhances residential and commercial spaces. Trust in my craftsmanship to bring creativity and functionality to your woodworking needs.</p>
                </motion.div> */}
            </motion.div>

            </div>    
        </div>
    );
};

export default SellerChatTitle;
