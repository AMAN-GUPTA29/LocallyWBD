import React from "react";
import { useState,useEffect } from 'react';
import Cookies from 'universal-cookie';
import NavPostLog from "../components/customerviewComponent/NavPostLog";
import Footer from "../components/customerviewComponent/Footer";
import ProfileCard from "../components/profileComponent/_ProfileDataCard";
import TransactionCard from "../components/profileComponent/_TransactionDataCard";
import Fotterfinal from "../components/landingpageComponent/footer";
const cookie = new Cookies();

const dummyData = {
  name: "Consumer1",
  address: "IIIT Sricity",
  pincode: 517617,
};

export default () => {
  const token = cookie.get("TOKEN");
  const [customer, setCustomer] = useState({
      name: "",
      email: "",
      phone: "",
      address:"",
      pin:""
  });

useEffect(() => {
    console.log(token);
    fetch('http://localhost:8080/api/consumer/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        if(data.message === "founduser"){
            data = data.data
            setCustomer(prevState => ({
                ...prevState,
                name: data.name,
                email:data.email,
                phone:data.phone,
                address:data.address,
                pin:data.pin
            }));
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <NavPostLog />
      <ProfileCard data={customer} />
      <TransactionCard />
      <Fotterfinal />
    </div>
  );
};
