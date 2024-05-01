import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    console.log("close")
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r w-screen from-gray-800 to-red-700 text-white shadow-lg -mt-4">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link className="text-yellow-500 text-lg font-bold" to="/">
          <b>Locally</b>
        </Link>

        {/* Responsive Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="material-icons">menu</span>
        </button>

        {/* Responsive Nav Items for Large Screens */}
        <div className="lg:flex lg:items-center space-x-4">
          <NavLink to="/sellerview">Home</NavLink>
          <NavLink to="/seller/services">Your Services</NavLink>
          <NavLink to="/seller/chatTitle">Chat</NavLink>
          <NavLink to="/seller/request">Requests</NavLink>
          <NavLink to="/seller/broadcast">Notifications</NavLink>
          <NavLink to="/seller/history">History</NavLink>
          <NavLink to="/seller/profile">Profile</NavLink>
          <NavLink to="/">Logout</NavLink>
        </div>

        {/* Responsive Nav Items Container for Small Screens */}
        <div
          className={`lg:hidden fixed top-0  ${isMenuOpen?'left-0':'-left-full'} h-screen w-screen bg-gradient-to-r from-gray-800 to-gray-700 transform  transition-transform ease-in-out`}
        >
          <div className="flex items-center justify-end p-4">
            <button
              className="text-white focus:outline-none"
              onClick={closeMenu}
            >
              <span className="material-icons">close</span>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <NavLink to="/sellerview" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/seller/services" onClick={closeMenu}>Your Services</NavLink>
            <NavLink to="/seller/chatTitle" onClick={closeMenu}>Chat</NavLink>
            <NavLink to="/seller/request" onClick={closeMenu}>Requests</NavLink>
            <NavLink to="/seller/broadcast" onClick={closeMenu}>Notifications</NavLink>
            <NavLink to="/seller/history" onClick={closeMenu}>History</NavLink>
            <NavLink to="/seller/profile" onClick={closeMenu}>Profile</NavLink>
            <NavLink to="/seller/login" onClick={closeMenu}>Logout</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`text-gray-300 hover:text-white px-3 py-2 rounded transition duration-300 ${
        location.pathname === to ? 'font-bold border-b-2 border-yellow-500' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
