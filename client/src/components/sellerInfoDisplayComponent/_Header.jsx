import React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
const cookie = new Cookies();

const Header = ({ _id,seller_id, name, email, phone, address, pin }) => {
  const navigate = useNavigate();
  const token = cookie.get("TOKEN");
  const hireme = ()=>{
    fetch(`http://localhost:8080/api/customer/makerequest/${_id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            navigate("/customerview");
        })
        .catch(error => console.error(error));      
  }
  return (
    <header id="home" style={{ padding: '1.5rem 0' }}>
      <div className="container mx-auto flex items-center justify-center bg-rose-50 bg-opacity-100"> {/* Updated */}
        <div className="text-start"> {/* Updated */}
          <h6 style={{ color: '#718096' }} className="text-md font-semibold font-serif">Hello, I'm</h6>
          <h1 className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#000000' }}>{name}</h1>
          <p className="font-serif" style={{ color: '#000000' }}>☎ Phone : {phone}</p>
          <p className="font-serif" style={{ color: '#000000' }}>🏠 Address : {address}</p>
          <p className="font-serif" style={{ color: '#000000' }}>📍 Pin : {pin}</p>
          <p className="font-serif" style={{ color: '#000000' }}>✉ Email : {email}</p>

          <div style={{ marginTop: '1.5rem' }}>
            <button className="font-sans bg-orange-800 " onClick={hireme} style={{ color: '#ffffff', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontSize: '1.125rem', fontWeight: 'bold', cursor: 'pointer' }}>HIRE ME</button>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <a className="font-sans bg-orange-800" href={`/customer/chat/${seller_id}`} style={{ color: '#ffffff', padding: '0.75rem 3.1rem', borderRadius: '0.5rem', fontSize: '1.125rem', fontWeight: 'bold', cursor: 'pointer' }}>Chat</a>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}> {/* Updated */}
            <a style={{ marginRight: '1rem' }} href="#">
              <i className="ti-facebook" style={{ fontSize: '2rem', color: '#ffffff', transition: 'color 0.3s ease' }}></i>
            </a>
            <a style={{ marginRight: '1rem' }} href="#">
              <i className="ti-google" style={{ fontSize: '2rem', color: '#ffffff', transition: 'color 0.3s ease' }}></i>
            </a>
            <a style={{ marginRight: '1rem' }} href="#">
              <i className="ti-github" style={{ fontSize: '2rem', color: '#ffffff', transition: 'color 0.3s ease' }}></i>
            </a>
            <a href="#">
              <i className="ti-twitter" style={{ fontSize: '2rem', color: '#ffffff', transition: 'color 0.3s ease' }}></i>
            </a>
          </div>
        </div>
        <div className="img-holder">
          <img src="/images/man.svg" alt="" style={{ maxWidth: '100%' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
