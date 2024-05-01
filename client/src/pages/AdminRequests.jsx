import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Navbar from '../components/adminLandingPageComponent/navbar';
const cookie = new Cookies();

const AdminRequests = () => {
  const token = cookie.get("TOKEN");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/allpendingrequest',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="head text-center font-bold my-4 text-2xl">
        Requests
      </h1>
      {users.length > 0 ? (
        <div className="container-ss mx-auto">
          <table className="table-auto w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3">Customer Name</th>
                <th className="px-6 py-3">Seller Name</th>
                <th className="px-6 py-3">Service Name</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id} className="bg-white border-b">
                  <td className="px-6 py-4">{user.customerid ? user.customerid.name : 'N/A'}</td>
                  <td className="px-6 py-4">{user.sellerid ? user.sellerid.name : 'N/A'}</td>
                  <td className="px-6 py-4">{user.serviceid ? user.serviceid.title : 'N/A'}</td>
                  <td className="px-6 py-4">{user.accepted ? 
                    <div className='text-green-700'>Accepted</div> : <div className='text-red-700'>Not Accepted</div> }</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No pending requests</p>
      )}
    </div>
  );
};

export default AdminRequests;
