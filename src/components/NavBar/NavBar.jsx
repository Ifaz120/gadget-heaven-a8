import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const Links = <>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/statistics">Statistics</NavLink></li>
  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
  <li><NavLink to="/orders">Order History</NavLink></li>
  </>
  return (
    <div style={{
      paddingTop: isHome ? "20px" : "0px",
      backgroundColor: isHome ? "" : "white"
    }} className=''>
      <div style={{
        backgroundColor: isHome ? "#9538E2" : "white",
        color: isHome ? "white" : "black",  
        
      }} className="navbar rounded-t-3xl w-[90%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
  <div className="navbar-end flex gap-x-3">
    <Link to="/dashboard">
    <button className='border text-black p-2 rounded-full bg-white'><IoCartOutline /></button></Link>
    <Link to="/dashboard"><button className='border text-black p-2 rounded-full bg-white'><FaRegHeart /></button></Link>
    
    
  </div>
</div>
    </div>
  );
};

export default NavBar;