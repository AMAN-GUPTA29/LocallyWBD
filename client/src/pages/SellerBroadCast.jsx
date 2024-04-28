import React, { useState, useEffect } from 'react';
import Navbar from '../components/sellerhomeComponent/Navbar';

const SellerBroadcast = () => {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/seller/broadcast')
      .then(response => response.json())
      .then(data => {
        const reversedMsgs = data.reverse();
        setMsgs(reversedMsgs);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <div className="font-bold text-lg mb-2">BroadCasts</div>
        {msgs.map((msg, index) => (
          <div key={index} className="flex flex-col bg-blue-400 shadow-md p-4 rounded-md mb-4">
            <div className="blockquote mb-0">
              <p>Message: {msg.message}</p>
              <p>Time: {new Date(msg.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerBroadcast;
