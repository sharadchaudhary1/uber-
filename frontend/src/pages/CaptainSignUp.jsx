import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const CaptainSignUp = () => {

              const[email,setEmail]=useState('');
              const[password,setPassword]=useState('');
               const[firstname,setFirstname]=useState('');
                const[lastname,setLastname]=useState('');
                const[captainData,setCaptainData]=useState({});
                  const [color, setColor] = useState("");
                  const [vehicleNo, setVehicleNo] = useState("");
                   const [capacity, setCapacity] = useState(1);
                   const [vehicleType, setVehicleType] = useState("bike");
              
                   console.log(captainData)
        
                function handleSubmit(e){
                  e.preventDefault()
                  setCaptainData({
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
                  })
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
        
         <h3 className="text-lg mt-5 mb-2 font-semibold text-gray-700">Vehicle Details</h3>

            <label className="block text-sm font-medium text-gray-600">Vehicle Color</label>
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="text"
              required
              placeholder="e.g. White, Black, Blue"
              className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
            />

            <label className="block text-sm font-medium text-gray-600 mt-3">Vehicle Number</label>
            <input
              value={vehicleNo}
              onChange={(e) => setVehicleNo(e.target.value)}
              type="text"
              required
              placeholder="Enter Vehicle Number (e.g. MH12AB1234)"
              className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
            />

            <label className="block text-sm font-medium text-gray-600 mt-3">Capacity</label>
            <select
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              required
              className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
            >
              {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>

            <label className="block text-sm font-medium text-gray-600 mt-3">Vehicle Type</label>
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
              className="bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded"
            >
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>


    
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
    </div>
    </div>
  )
}

export default CaptainSignUp