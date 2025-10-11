import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Riding = () => {
  return (
    <div className="h-screen">
      <div className="h-1/2">
        <img
          className="h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>

      <div className="h-1/2 mt-7 p-3">
        <div className="flex items-center justify-between px-3">
          <img
            className="h-30 w-40"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          />

          <div>
            <h3 className="text-lg font-medium">sharad</h3>
            <h1 className="text-2xl font-bold">UP26M6898</h1>
            <h5>Thar Mahindra</h5>
          </div>
        </div>

        <div className="flex gap-2 items-center mt-12 px-5 text-left">
          <IoLocationSharp className="text-xl text-red-500" />
          <span>
            <h1 className="font-semibold text-lg ">civil lines ,roorkee</h1>
            <h3 className="text-lg text-gray-500">uttrakhand</h3>
          </span>
        </div>

        <div className="flex gap-2 items-center px-5 mt-7">
          <IoMdCash className="text-xl text-green-600" />
          <span className="flex gap-2 items-center text-lg font-bold">
            <FaIndianRupeeSign /> 193.5
          
          </span>
          <span className="text-gray-700 ml-2">Cash</span>
        </div>


        <button className="bg-blue-400 w-[80%] ml-[10%] mt-12 rounded-lg   py-2 "> Make a payment </button>
      </div>
    </div>
  );
};

export default Riding;
