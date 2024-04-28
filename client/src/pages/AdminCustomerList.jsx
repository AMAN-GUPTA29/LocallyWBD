import React, { useEffect, useState } from 'react';
import '../components/adminLandingPageComponent/admincss/customer.css';
import Navbar from '../components/adminLandingPageComponent/navbar';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const AdminCustomerList = () => {
  const token = cookie.get("TOKEN");
  const [users, setUsers] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState('');
  const [selectedCustomerId, setSelectedCustomerId] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/customerDetails',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const toggleModal1 = (userName, customerId) => {
    setSelectedUserName(userName);
    setSelectedCustomerId(customerId);
    setIsModalOpen1(!isModalOpen1);
  };

  const toggleModal2 = (userName) => {
    setSelectedUserName(userName);
    setIsModalOpen2(!isModalOpen2);
  };

  const blockUser = async () => {
    setBlockedUsers([...blockedUsers, selectedUserName]);
        toggleModal1();
    // try {
    //   const response = await fetch(`http://localhost:8080/api/blockCustomer/${selectedCustomerId}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ blocked: true }),
    //   });
    //   if (response.ok) {
    //     setBlockedUsers([...blockedUsers, selectedUserName]);
    //     toggleModal1(); // Close the modal
    //   } else {
    //     throw new Error('Failed to block user');
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };
  

  const unblockUser = () => {
    setBlockedUsers(blockedUsers.filter(user => user !== selectedUserName));
    toggleModal2(); // Close the modal
  };

  return (
    <div>
      <Navbar/>
      {/* Modal for blocking user */}
      {isModalOpen1 && (
        <div>
          <div
            className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-40"
            onClick={toggleModal1}
          ></div>
          <div
            id="static-modal"
            data-modal-backdrop="static"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow p-4 w-full max-w-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                Block Mr.{selectedUserName}
              </h3>
              <button
                data-modal-hide="static-modal"
                onClick={toggleModal1}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 space-y-4">
              <h5 className="text-xl font-semibold text-gray-900">
                Do you really want to block Mr.{selectedUserName}?
              </h5>
            </div>
            <div className="flex items-center p-4 border-t">
              <button
                onClick={blockUser}
                className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Block
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={toggleModal1}
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 ml-3"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for unblocking user */}
      {isModalOpen2 && (
        <div>
          <div
            className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-40"
            onClick={toggleModal2}
          ></div>
          <div
            id="static-modal"
            data-modal-backdrop="static"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow p-4 w-full max-w-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                Unblock Mr.{selectedUserName}
              </h3>
              <button
                data-modal-hide="static-modal"
                onClick={toggleModal2}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 space-y-4">
              <h5 className="text-xl font-semibold text-gray-900">
                Do you really want to unblock Mr.{selectedUserName}?
              </h5>
            </div>
            <div className="flex items-center p-4 border-t">
              <button
                onClick={unblockUser}
                className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Unblock
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={toggleModal2}
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 ml-3"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className="head text-center font-bold my-4 text-2xl">
        Customers Of Locally
      </h1>

      {users && (
        <div className="container-ss mx-auto">
          <table className="table-auto w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">Mr.{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user._id}</td>
                  <td className="border px-4 py-2">
                    {blockedUsers.includes(user.name) ? (
                      <button
                        onClick={() => toggleModal2(user.name)}
                        className="text-white bg-green-700 hover:bg-green-800 hover:text-white font-bold rounded-lg text-sm px-5 py-2.5"
                      >
                        <h5>Unblock</h5>
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleModal1(user.name, user.customerid)}
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
    </div>
  );
};

export default AdminCustomerList;
