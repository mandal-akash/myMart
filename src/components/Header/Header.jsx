import React, { useState, useEffect } from "react";
import logo from "../../images/myMart.png";
import "../../style/header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../backend/Firebase";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar shadow-md border top-0 sticky z-50 bg-white h-20">
      <div className="logo">
        <Link to="/">
          <img src={logo} className="w-20 " />
        </Link>
      </div>
      <div className={isOpen ? "mobile-link" : " nav gap-2 flex justify-between flex-1"}>
        <div className="header-left flex text-sm font-bold">
          <li className="underlineEffect ml-6 px-3 py-4 list-none">
            <Link to="/men">MEN</Link>
          </li>
          <li className="underlineEffect ml-6 px-3 py-4 list-none">
            <Link to="/women">WOMEN</Link>
          </li>
          <li className="underlineEffect ml-6 px-3 py-4 list-none">
            <Link to="/electronics">ELECTRONICS</Link>
          </li>
          <li className="underlineEffect ml-6 px-3 py-4 list-none">
            <Link to="/beauty">BEAUTY</Link>
          </li>
        </div>
        <div className="header-right flex">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-4">
              <div className="w-8 rounded-full">
                <i className="text-2xl  bi bi-person"></i>
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li className="text-gray-800">
                <Link to="/login">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li className="text-gray-800" onClick={()=>(signOut(auth))}><a>Logout</a></li>
            </ul>
          </div>
          <div className="bag text-center mx-2">
            <i className="bi bi-handbag"></i>
            <p className='text-gray-600 font-sans text-sm font-bold'><Link to={"/cart"}>Bag</Link></p>
          </div>
        </div>
        
      </div>
      <div className="mobile-humburger-button">
        <button className="hamburger-button" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
    </div>
  );
};

export default Header;
