import React, { useContext } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignUp = () => {

              const[email,setEmail]=useState('');
              const[password,setPassword]=useState('');
               const[firstname,setFirstname]=useState('');
                const[lastname,setLastname]=useState('');
               
                  const [color, setColor] = useState("");
                  const [vehicleNo, setVehicleNo] = useState("");
                   const [capacity, setCapacity] = useState(1);
                   const [vehicleType, setVehicleType] = useState("bike");
              
                    const {captain,setCaptain}=useContext(CaptainDataContext)

                    const navigate=useNavigate()
        
           async function handleSubmit(e){
                  e.preventDefault()
                 const captainData= {
                    fullname:{
                        firstname:firstname,
                        lastname:lastname
                    },
                    email:email,
                    password:password,
                    vehicle: {
                             color,
                             vehicleNo,
                             capacity,
                             vehicleType,
                    },
                  }

                  const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData,{withCredentials:true})

                  if(res.status==201){
                    const data=res.data
                    setCaptain(data.captain)
                   
                    navigate('/start-home')
                  }
                  
                  setFirstname("");
                   setLastname("");
                   setEmail("");
                   setPassword("");
                   setColor("");
                   setVehicleNo("");
                    setCapacity(1);
                     setVehicleType("car");
                  
                }
    

  return (
    <div>
          <div className="flex flex-col justify-between h-screen bg-gray-50">
    
      <div className="p-7">
        <img
          className="w-20 h-20 ml-3 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Logo"
        />

        <form onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="text-2xl mb-3 text-center font-semibold text-gray-800">
            Login to Uber
          </h2>

{/* firstname */}
          <label className="block text-l font-medium text-gray-600">First Name</label>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            required
            placeholder="Enter First Name"
            className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
          />

      {/* lastname */}
          <label className="block text-l font-medium text-gray-600 mt-3">Last Name</label>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            required
            placeholder="Enter  Last Name"
            className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
          />

      {/* email */}
          <label className="block text-l font-medium text-gray-600 mt-3">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter your Email"
            className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
          />

          {/* password */}
          <label className="block text-l font-medium text-gray-600 mt-3">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter your Password"
            className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
          />
        
      
<div className="mt-6      ">
  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
    Vehicle Information
  </h3>

  <div className="flex flex-wrap gap-1 ">
     
     {/* vehicle color */}
    <div className='w-[47%] '>
      <label className="block text-l font-medium text-gray-600">
        Vehicle Color
      </label>
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="text"
        required
        placeholder="e.g. White, Black, Blue"
        className="bg-gray-100 w-full px-4 py-2 mt-1 rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
      />
    </div>

    {/* Vehicle Number */}
    <div className='w-[47%] ml-3  '>
      <label className="block text-l font-medium text-gray-600">
        Vehicle Number
      </label>
      <input
        value={vehicleNo}
        onChange={(e) => setVehicleNo(e.target.value)}
        type="text"
        required
        placeholder="e.g. MH12AB1234"
        className="bg-gray-100 w-full px-4 py-2 mt-1 rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
      />
    </div>

     {/* vehicle capacity */}
    <div className='w-[47%]  py-3'>
      <label className="block text-l font-medium text-gray-600">
        Capacity
      </label>
      <select
        value={capacity}
        onChange={(e) => setCapacity(Number(e.target.value))}
        required
        className="bg-gray-100 w-full px-4 py-2 mt-1 rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
      >
        <option value="">Select capacity</option>
        {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num} {num === 1 ? "seat" : "seats"}
          </option>
        ))}
      </select>
    </div>

    {/* vehicle type */}
    <div className='w-[47%] ml-3 py-3'>
      <label className="block text-l font-medium text-gray-600">
        Vehicle Type
      </label>
      <select
        value={vehicleType}
        onChange={(e) => setVehicleType(e.target.value)}
        required
        className="bg-gray-100 w-full px-4 py-2 mt-1 rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
      >
        <option value="">Select vehicle type</option>
        <option value="car">Car</option>
        <option value="bike">Bike</option>
        <option value="auto">Auto</option>
      </select>
    </div>
  </div>
</div>



    
          <button
            type="submit"
            className="text-white bg-gray-700 font-semibold text-xl py-2 mt-4 rounded hover:bg-gray-800 transition"
          >
            Register
          </button>
        </form>

       
        <p className="text-l text-gray-600 text-center mt-5">
          Already have captain account?{' '}
          <Link
            to="/captain-login"
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
    </div>8
    </div>
  )
}

export default CaptainSignUp