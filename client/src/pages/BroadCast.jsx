import React, { useEffect, useState } from "react";
import Message from "../components/customerviewComponent/_Message";
import NavPostLog from "../components/customerviewComponent/NavPostLog";
import Fotterfinal from "../components/landingpageComponent/footer";
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const dummydata = [
  "festival discounts for sellers",
  "New Broadcast 123",
  "hello",
  "alert ! new services added",
];

export default () => {
  const token = cookie.get("TOKEN");
  const [cardArray, setCardArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/consumer/viewbroadcast', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data = data.data
        setCardArray(data.map(msg => msg.broadcastMeassage));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <>
      <NavPostLog />
      <br />
      {cardArray.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <Fotterfinal />
    </>
  );
};
