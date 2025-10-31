import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CaptainAcceptRide = () => {

  const navigate=useNavigate()
  return (
    <div className="relative overflow-x-hidden border-none h-screen w-screen bg-white font-sans">
      <img
        className="fixed top-0 left-0 w-full h-[45%] object-cover z-0"
        src="https://i.sstatic.net/gtiI7.gif"
        alt="map"
      />

      <img
        className="absolute h-18 w-20 ml-5 mt-8 z-20"
        src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png"
        alt="logo"
      />

      <button className="absolute bg-white p-2 rounded-full right-8 top-9 cursor-pointer text-3xl font-bold z-20  ">
        <RiLogoutBoxLine />
      </button>

      <div className="w-full h-[55%] rounded-2xl  absolute bottom-0 ">
      <h2 className="text-center text-2xl font-semibold mt-2">New Ride avilable</h2>
        <div className="flex items-center bg-yellow-300 w-[90%] ml-5 rounded-lg py-2 px-8 mt-5 justify-between">
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

        <div className="flex  flex-col justify-evenly  px-6 mt-5 gap-2    py-8  ">
          <div className="flex gap-2 items-center mb-3 text-left">
            <IoLocationSharp className="text-xl text-blue-600" />
            <span>
              <h1 className="font-bold text-lg">civil lines</h1>
              <h3 className="text-xs text-gray-500">roorkee</h3>
            </span>
          </div>
          <div className="flex gap-2 items-center mb-3 text-left">
            <IoLocationSharp className="text-xl text-red-500" />
            <span>
              <h1 className="font-bold text-lg">Ramnagar</h1>
              <h3 className="text-xs text-gray-500">roorkee</h3>
            </span>
          </div>
          <div className="flex  items-center mb-3">
            <IoMdCash className="text-xl text-green-600" />
            <span className="flex flex  pl-2 items-center text-lg font-bold">
              <FaIndianRupeeSign />
              121.3
            </span>
            <p className="text-gray-700 ml-2">Cash</p>
          </div>
        </div>
           
           <div className="flex flex-col gap-2 w-4/5 ml-10 ">

           <button onClick={()=>navigate('/confirm-ride')} className="bg-green-500 rounded py-2  text-lg font-medium">Accept </button>

           <button className="bg-gray-300 rounded py-2 text-lg font -medium">Ignore </button>
           </div>
      </div>
    </div>
  );
};

export default CaptainAcceptRide;
