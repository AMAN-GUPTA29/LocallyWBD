import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

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
                requests
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
    </nav>
  );
}
