import React, { useState, useEffect } from 'react';
import Navbar from '../components/sellerhomeComponent/Navbar';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const SellerBroadcast = () => {
  const token = cookie.get("TOKEN");
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/seller/viewbroadcast', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const reversedMsgs = data.data
        setMsgs(reversedMsgs);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <div className="font-bold text-lg mb-2 mx-3">BroadCasts</div>
        <div className="users">
          <div className="w-full grid grid-cols-1 gap-4">
            {msgs && msgs.map((msg, index) => (
              <div key={index} className="user border shadow-lg rounded-xl p-4 bg-white mx-3">
                <div className="flex justify-between">
                  <p>Message: {msg.broadcastMeassage}</p>
                  <p className=''>Time: {new Date(msg.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerBroadcast;
