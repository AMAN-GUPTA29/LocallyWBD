import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/sellerhomeComponent/Navbar';
import plumberpng from '../components/sellerServicesComponent/sellerImages/plumber.png'
import electricianpng from '../components/sellerServicesComponent/sellerImages/electrician.png';
import carpenterpng from '../components/sellerServicesComponent/sellerImages/carpenter.png';
import { Footer } from '../components/sellerServicesComponent/Footer';

const cookie = new Cookies();

export const SellerServices = () => {
    const token = cookie.get("TOKEN")
    const [services,setServices] = useState([]);
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

    useEffect(()=>{
        fetch("http://localhost:8080/api/seller/services/viewservice",{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
        }).then(response => response.json())
        .then(data => {
            data = data.data
            console.log(data)
            setServices(data)
        })
        .catch(error => console.error('Error fetching data:', error));
    },[])

    return (
        <div>
            <Navbar/>
            <div style={containerStyle} className='services'>
            <h1>Your Services</h1>
            <motion.div
                style={flexContainerStyle}
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                {services.map((service,index)=>(
                    <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                    key={index}
                >
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Ttile : {service.title}</p>
                    <div>Tag : {service.tag}</div>
                    <div>Charge : {service.charge}</div>
                    <p style={{ fontSize: '0.95rem' }}>Description : {service.description}</p>
                </motion.div>
                ))}
                {/* <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                >
                    <img src={plumberpng} alt="" style={{ width: '200px', height: '50%' }} />
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Plumber</p>
                    <p style={{ fontSize: '0.95rem' }}>As a dedicated plumbing service provider, I bring expertise in diagnosing, repairing, and maintaining plumbing systems. With a commitment to prompt and efficient service, I tackle issues ranging from leaks and clogs to pipe installations, ensuring optimal functionality for residential and commercial clients. Trust in my skillset to deliver reliable solutions.</p>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                >
                    <img src={electricianpng} alt="" style={{ width: '200px', height: '50%' }} />
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Electrician</p>
                    <p style={{ fontSize: '0.95rem' }}>As a seasoned electrician service provider, I specialize in delivering top-notch electrical solutions for residential and commercial needs. With a focus on safety and precision, I handle installations, repairs, and maintenance of electrical systems. Count on my expertise to ensure your property is equipped with efficient and secure electrical infrastructure.</p>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    style={itemStyle}
                >
                    <img src={carpenterpng} alt="" style={{ width: '200px', height: '50%' }} />
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Carpenter</p>
                    <p style={{ fontSize: '0.95rem' }}>As a skilled carpenter service provider, I offer tailored woodworking solutions for diverse projects. From crafting custom furniture to executing precise installations, my expertise enhances residential and commercial spaces. Trust in my craftsmanship to bring creativity and functionality to your woodworking needs.</p>
                </motion.div> */}
            </motion.div>
            <Link to="/addservices" style={linkStyle}>Add Service</Link>
        </div>
        <Footer/>
        </div>
    );
};
