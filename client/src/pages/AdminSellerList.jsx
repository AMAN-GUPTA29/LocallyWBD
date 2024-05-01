import React, { useEffect, useState } from 'react';
import '../components/adminLandingPageComponent/admincss/customer.css';
import Navbar from '../components/adminLandingPageComponent/navbar';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const AdminSellerList = () => {
  const token = cookie.get("TOKEN");
  const [users, setUsers] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [selectedUserName, setSelectedUserName] = useState('');
  const [selectedSellerId, setSelectedSellerId] = useState('');
  const [selectedSellerEmail, setSelectedSellerEmail] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/sellerlist', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error('Error fetching data:', error));

      fetch('http://localhost:8080/api/admin/blockedsellerlist', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => setBlockedUsers(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const blockUser = async (userName, customerId, email) => {
    console.log("block seller func")
    try {
      const response = await fetch(`http://localhost:8080/api/admin/blockseller`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ blocked: true, email }),
      });
      if (response.ok) {
        setBlockedUsers([...blockedUsers, userName]);
        window.location.reload();
      } else {
        throw new Error('Failed to block user');
      }
    } catch (err) {
      console.error(err);
    }
  };


  const unblockUser = async (userName, email) => {
    console.log("Unblock consumer func")
    try {
      const response = await fetch(`http://localhost:8080/api/admin/unblockseller`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ blocked: false, email }),
      });
      if (response.ok) {
        setBlockedUsers(blockedUsers.filter(user => user !== userName));
        window.location.reload();
      } else {
        throw new Error('Failed to unblock user');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="head text-center font-bold my-4 text-2xl">
        Sellers Of Locally
      </h1>

      {users && (
        <div className="container-ss mx-auto">
          <table className="table-auto w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Pincode</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">Mr.{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user._id}</td>
                  <td className="border px-4 py-2">{user.phone}</td>
                  <td className="border px-4 py-2">{user.address}</td>
                  <td className="border px-4 py-2">{user.pin}</td>
                  <td className="border px-4 py-2 text-xl font-semibold text-orange-700">{user.status}</td>
                  <td className="border px-4 py-2">
                  {user.status === "blocked" ? (
                      <button
                        onClick={() => unblockUser(user.name, user.email)}
                        className="text-white bg-green-700 hover:bg-green-800 hover:text-white font-bold rounded-lg text-sm px-5 py-2.5"
                      >
                        <h5>Unblock</h5>
                      </button>
                    ) : (
                      <button
                        onClick={() => blockUser(user.name, user.customerid, user.email)}
                        className="text-white bg-red-700 hover:bg-red-800 hover:text-white font-bold rounded-lg text-sm px-5 py-2.5"
                      >
                        <h5>Block</h5>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ---------------------------------------------------------------------------------------- */}
      <h1 className="head text-center font-bold my-4 text-2xl">
        Blocked Sellers
      </h1>
      {blockedUsers && (
        <div className="container-ss mx-auto">
          
          <table className="table-auto w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {blockedUsers && blockedUsers.map((user, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user._id}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => unblockUser(user.name, user.email)}
                      className="text-white bg-green-700 hover:bg-green-800 hover:text-white font-bold rounded-lg text-sm px-5 py-2.5"
                    >
                      <h5>Unblock</h5>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default AdminSellerList;
