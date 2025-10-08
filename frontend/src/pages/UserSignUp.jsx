
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const UserSignUp = () => {

      const[email,setEmail]=useState('');
          const[password,setPassword]=useState('');
           const[firstname,setFirstname]=useState('');
            const[lastname,setLastname]=useState('');
            const[userData,setUserData]=useState({});
         
            console.log(userData)
    
            function handleSubmit(e){
              e.preventDefault()
              setUserData({
                fullname:{
                    firstname:firstname,
                    lastname:lastname
                },
                email:email,
                password:password
              })
              setEmail('')
              setPassword('')
    
            }

  return (
     <div className="flex flex-col justify-between h-screen bg-gray-50">
    
      <div className="p-7">
        <img
          className="w-20 h-20 ml-3 mb-3"
          src="https://thumbs.dreamstime.com/b/web-183282931.jpg"
          alt="Logo"
        />

        <form onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="text-2xl mb-3 text-center font-semibold text-gray-800">
            Login to Uber
          </h2>


          <label className="block text-sm font-medium text-gray-600">First Name</label>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            required
            placeholder="Enter First Name"
            className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
          />

      
          <label className="block text-sm font-medium text-gray-600 mt-3">Last Name</label>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            required
            placeholder="Enter  Last Name"
            className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
          />

  
          <label className="block text-sm font-medium text-gray-600 mt-3">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter your Email"
            className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
          />

     
          <label className="block text-sm font-medium text-gray-600 mt-3">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter your Password"
            className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
          />

    
          <button
            type="submit"
            className="text-white bg-gray-700 font-semibold text-xl py-2 mt-4 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

       
        <p className="text-l text-gray-600 text-center mt-5">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-black font-semibold hover:underline hover:text-gray-800 transition"
          >
            Login here
          </Link>
        </p>
      </div>

     
      <div className="p-7 mb-10">
         <p className='text-[10px]' >Uber provides a technology platform that connects riders (users seeking transportation) with drivers (independent service providers).
Uber does not own vehicles or employ drivers directly. Each driver operates as an independent contractor</p>
      </div>
    </div>
  );
  
}
