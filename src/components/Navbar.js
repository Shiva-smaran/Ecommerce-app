import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";


const Navbar = ({ cartCount }) => {
  return (
<nav className="bg-green-800 p-4 h-16 text-white flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
  
      <Link to="/" className="text-lg font-bold">
        Home
      </Link>
      <Link to="/" className="flex items-center gap-2 text-lg font-bold">
        <img
          src= {logo} alt="Company Logo" className="w-10 h-10 object-contain"/>
        <span className="text-xl font-semibold">Stalcon E-commerce</span>
      </Link>
      <Link to="/cart" className="relative">
        🛒 Cart 
        {cartCount > 0 && (
          <span className="ml-1 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
