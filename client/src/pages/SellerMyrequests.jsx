import React, { useEffect, useState } from 'react';
import Navbar from '../components/sellerhomeComponent/Navbar';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const SellerMyrequests = () => {
  const token = cookie.get("TOKEN")
  const [requests, setRequests] = useState([
    // {
    //   id: 1,
    //   customer: 'Customer1',
    //   email: 'customer1@locally.com',
    //   service: 'Electrician',
    //   price: '$100',
    //   accepted: true,
    //   rejected: false,
    // },
    // {
    //   id: 2,
    //   customer: 'Customer4',
    //   email: 'customer4@locally.com',
    //   service: 'Carpenter',
    //   price: '$100',
    //   accepted: false,
    //   rejected: false,
    // },
  ]);

  const handleAccept = (_id) => {
    // setRequests((prevRequests) =>
    //   prevRequests.map((request) =>
    //     request.id === id ? { ...request, accepted: true } : request
    //   )
    // );
    fetch(`${import.meta.env.VITE_BASE_URL}/api/seller/request/accepted/${_id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            window.location.reload();
        })
        .catch(error => console.error(error));
  };

  const handleReject = (_id) => {
    // setRequests((prevRequests) =>
    //   prevRequests.map((request) =>
    //     request.id === id ? { ...request, rejected: true } : request
    //   )
    // );
    fetch(`${import.meta.env.VITE_BASE_URL}/api/seller/request/cancel/${_id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            window.location.reload();
        })
        .catch(error => console.error(error));
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/seller/viewrequests`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data)
        setRequests(data.data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <div className=''>
      <Navbar />
      <header className="header-content mx-5 flex items-center justify-center h-20 mt-10 bg-gradient-to-r from-gray-600 to-yellow-300 px-4 rounded-xl">
        <h2 className="text-black font-bold text-xl">
          Service Requests
          {/* <span className="text-info">Requests</span> */}
        </h2>
      </header>
      <div className="mx-5 flex flex-col justify-center font-serif text-lg">
        {requests && requests.map((item) => (
          <div
            key={item._id}
            className={`col-12 flex flex-col justify-center m-3 p-4 px-5 h-fit py-5 border rounded-xl ${item.accepted
                ? 'bg-gradient-to-r from-green-400 to-gray-400'
                : item.rejected
                  ? 'bg-gradient-to-r from-red-400 to-gray-400'
                  : 'bg-gray-300'
              }`}
          >
            <div className="flex">
              <h5>
                Customer Name : <p className="fs-5 inline mx-5">{item.customerid.name}</p>
              </h5>
            </div>
            <div className="flex">
              <h5>
                Customer Address :
                <p className="fs-5 inline mx-5">{item.customerid.address}</p>
              </h5>
            </div>
            <div className="flex">
              <h5>
                Customer Pincode :
                <p className="fs-5 inline mx-5">{item.customerid.pin}</p>
              </h5>
            </div>
            <div className="flex">
              <h5>
                Requested Service :
                <p className="fs-5 inline mx-5">{item.serviceid.title}</p>
              </h5>
            </div>
            <div className="flex">
              <h5>
                charge :
                <p className="fs-5 inline mx-5">{item.serviceid.charge} ₹ </p>
              </h5>
            </div>
            <div className="flex buttons justify-center">
              {!item.accepted && (
                <div className='flex buttons justify-center'>
                  <button
                  onClick={() => handleAccept(item._id)}
                  className="border p-2 px-5 accept text-decoration-none text-white bg-green-500"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(item._id)}
                  className="border p-2 px-5 reject text-decoration-none text-white bg-red-500"
                >
                  Reject
                </button>
                </div>
                
              )}
              {/* {!item.accepted && (
                <button
                  onClick={() => handleReject(item.id)}
                  className="border p-2 px-5 reject text-decoration-none text-white bg-red-500"
                >
                  Reject
                </button>
              )} */}
              {item.accepted && (
                <div>
                  <button className="border p-2 px-5 accepted text-decoration-none text-white" disabled>
                  Accepted
                </button>
                </div>
              )}
              {/* {item.rejected && (
                <button className="border p-2 px-5 rejected text-decoration-none text-white" disabled>
                  Rejected
                </button>
              )} */}
            </div>
          </div>
        ))}

        {requests.length === 0 && (
          <React.Fragment>
            <h1 className="m-3 text-center">Empty</h1>
            <h1 className="m-3">No Requests From any User</h1>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default SellerMyrequests;
