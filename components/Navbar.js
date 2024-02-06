import React, { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ isLogin, setisLogin }) => {
  function handlelogout(e){
    e.preventDefault();
    localStorage.removeItem('token');
    setisLogin(false)
toast.error("User Logged Out!")
  }
  useEffect(() => {
    // Check for token in localStorage when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      setisLogin(true);
    }
    
  }, [setisLogin]);

  return (
    <>
    <ToastContainer autoClose={2000}/>
    <div className="navbar bg-pink-400">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          CodesWear
        </Link>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary flex justify-around w-max  max-w-xs"
        />
        <button className="btn btn-secondary bg-pink-300 m-3">Search </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold">
            <Link href="/about">About</Link>
          </li>
        <li className='font-bold'><Link href='/smartphones'>SmartPhones</Link></li>
        <li className='font-bold'><Link href='/fragrances'>Fragrances</Link></li>
        <li className='font-bold'><Link href='/skincare'>SkinCare</Link></li>
        <li className='font-bold'><Link href='/laptops'>Laptops</Link></li>
        <li className='font-bold'><Link href='/contact'>Contact Us</Link></li>
          {isLogin ? (
            <div className="mx-3 my-3">
              <FaUser />
              
            </div>
            
          ) : (
            <li className="font-bold">
              <Link href="/login">Login</Link>
            </li>
          )}
          {!isLogin && (
            <li className="font-bold">
              <Link href="/signup">SignUp</Link>
            </li>
          )}
          {isLogin && <button className='btn btn-secondary' onClick={handlelogout}>Log Out</button>}
        </ul>
      </div>
    </div>
    
    </>
  );
};

export default Navbar;
