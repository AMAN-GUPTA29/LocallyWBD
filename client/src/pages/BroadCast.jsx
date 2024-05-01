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
        if(data){
          setCardArray(data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <>
      <NavPostLog />
      <br />
      <div className="container my-4">
      <h2 className="mx-5 text-black text-4xl text-center font-bold font-serif my-4 mb-6">BroadCasts</h2>
        <div className="users">
          <div className="w-full grid grid-cols-1 gap-4">
            {/* {msgs && msgs.map((msg, index) => (
              <div key={index} className="user border shadow-lg rounded-xl p-4 bg-white mx-3">
                <div className="flex justify-between">
                  <p>Message: {msg.broadcastMeassage}</p>
                  <p className=''>Time: {new Date(msg.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </div>
            ))} */}
            {cardArray && cardArray.map((message, index) => (
        <Message key={index} message={message.broadcastMeassage} time={message.time}/>
      ))}
          </div>
        </div>
      </div>
      <Fotterfinal />
    </>
  );
};
