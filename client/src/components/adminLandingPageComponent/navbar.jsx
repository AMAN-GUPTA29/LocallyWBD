import React, { useState } from "react";
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import AdminProfile from "../../pages/AdminProfile";
const cookie = new Cookies();

export default function Navbar() {
  const token = cookie.get("TOKEN");
  const { logout } = useAuth();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); // Add this state

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-yellow-400 text-xl font-bold">LOCALLY</span>
          </div>
          <div className="sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link
                to="/adminland"
                className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-yellow-400 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/admin/customerlist"
                className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-yellow-400 hover:text-gray-900"
              >
                Customers
              </Link>
              <Link
                to="/admin/sellerlist"
                className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-yellow-400 hover:text-gray-900"
              >
                Sellers
              </Link>
              <Link
                to="/adminbroadcast"
                className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-yellow-400 hover:text-gray-900"
              >
                Broadcast
              </Link>
              <Link
                to="/requests"
                className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-yellow-400 hover:text-gray-900"
              >
                Requests
              </Link>
              <Link
                to="/admin/transactions"
                className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-yellow-400 hover:text-gray-900"
              >
                Transactions
              </Link>
              <Link
                to="/admin/history"
                className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-yellow-400 hover:text-gray-900"
              >
                History
              </Link>
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-yellow-400 hover:text-gray-900 cursor-pointer"
              >
                Profile
              </button>
              <Link
                to="/"
                onClick={handleLogout}
                className="text-white border rounded-md px-3 py-2 text-sm font-medium transition duration-300 hover:bg-yellow-400 hover:text-gray-900"
              >
                Logout
              </Link>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="bg-gray-900 text-white inline-flex items-center justify-center p-2 rounded-md  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/adminland"
            className="text-gray-300 hover:bg-yellow-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/admincustomer"
            className="text-gray-300 hover:bg-yellow-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
          >
            Customers
          </Link>
          <Link
            to="/adminworker"
            className="text-gray-300 hover:bg-yellow-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
          >
            Workers
          </Link>
          <Link
            to="/adminbroadcast"
            className="text-gray-300 hover:bg-yellow-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
          >
            Broadcast
          </Link>
          <Link
            to="/"
            onClick={handleLogout}
            className="text-white border rounded-md px-3 py-2 text-sm font-medium transition duration-300 hover:bg-yellow-400 hover:text-gray-900"
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Profile</h3>
                    <AdminProfile/>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setIsProfileModalOpen(false)}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-400 text-base font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
