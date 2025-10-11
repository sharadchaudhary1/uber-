

import React from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { IoMdCash } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const CaptainConfirmRide = () => {
    const navigate=useNavigate()

  return (
      <div className=" overflow-x-hidden border-none h-screen w-screen bg-white font-sans">
        <div className="w-full mt-9 rounded-2xl   ">
        <h2 className="text-center text-2xl font-semibold mt-2">Confirm this ride to start</h2>
          <div className="flex items-center bg-yellow-300 w-[90%] ml-5 rounded-lg py-2 px-8 mt-9 justify-between">
            <div className="flex gap-2 items-center">
              <img
                className="h-12 w-12 rounded-full"
                src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q"
              ></img>
              <h1 className="text-xl font-semibold">Harsh Patel</h1>
            </div>
            <div>
              <h1 className="flex items-center text-xl font-medium ">2.2 km </h1>
            </div>
          </div>
  
          <div className="flex  flex-col justify-evenly  px-6 mt-3 gap-5    py-8  ">
            <div className="flex gap-4 items-center mb-3 text-left">
              <IoLocationSharp className="text-2xl text-blue-600" />
              <span>
                <h1 className="font-bold text-2xl">civil lines</h1>
                <h3 className=" text-gray-500 text-xl">roorkee</h3>
              </span>
            </div>
            <div className="flex gap-4 items-center mb-3 text-left">
              <IoLocationSharp className="text-2xl text-red-500" />
              <span>
                <h1 className="font-bold text-2xl">Ramnagar</h1>
                <h3 className="text-xl text-gray-500">roorkee</h3>
              </span>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <IoMdCash className="text-2xl text-green-600" />
              <span className="flex   pl-2 items-center text-2xl font-bold">
                <FaIndianRupeeSign className='text-lg' />
                121.3
              </span>
              <p className="text-gray-700 text-xl ml-2">Cash</p>
            </div>
          </div>
             
             <div className="flex flex-col gap-5 w-4/5 ml-10  mt-10 ">
  
             <button onClick={()=>navigate('/captain-riding')} className="bg-green-500 rounded py-2  text-2xl font-medium">Confirm </button>
  
             <button onClick={()=>navigate('/captain')} className="bg-red-400 rounded py-2 text-3xl font -medium">cancel </button>
             </div>
        </div>
      </div>
  )
}

export default CaptainConfirmRide