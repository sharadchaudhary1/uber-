
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCash } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";
import LookingForDriver from '../components/LookingForDriver';

const vehicleData = [
  {
    name: "Uber Go",
    seats: 4,
    img: "https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png",
    eta: "3 min away",
    price: "193.15",
    description: "Affordable, comfort rides"
  },
   {
    name: "Uber Go",
    seats: 4,
    img: "https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png",
    eta: "3 min away",
    price: "193.15",
    description: "Affordable, comfort rides"
  },

  
  {
    name: "Uber Solo",
    seats: 1,
    img: "https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n",
    eta: "2 min away",
    price: "63.15",
    description: "Affordable, comfort rides"
  },
  {
    name: "Uber Go",
    seats: 3,
    img: "https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n",
    eta: "5 min away",
    price: "120.00",
    description: "Affordable, comfort rides"
  }
];

const pickupLocation = {
  address: "562/11-A",
  description: "Roorkee Canal, Roorkee"
}
const dropLocation = {
  address: "MDR 39",
  description: "Civil Lines, Roorkee"
}

const ChooseVehicle = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [confirmRide,setConfirmRide]=useState(false)
  return (

 
    <div className="relative overflow-x-hidden border-none h-screen w-screen bg-white font-sans">
      {/* Map */}
      <img
        className="fixed top-0 left-0 w-full h-[50%] object-cover z-0"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="map"
      />

      {/* Logo */}
      <img
        className="absolute h-18 w-20 ml-5 mt-8 z-20"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="logo"
      />

      {/* Panel */}
      <div className="absolute left-0 w-full flex justify-center items-end h-screen pointer-events-none z-20">
        {/* Choose Vehicle Section */}
        {!selectedVehicle && (
          <div className="relative pointer-events-auto w-full md:w-[500px] mx-auto bg-gray-100 shadow-2xl rounded-t-2xl p-6 transition-all duration-500 h-[62%] border-none animate-fadeInUp">
            <h2 className="text-2xl font-bold mb-2 text-center">Choose a vehicle</h2>
            <div className="flex flex-col gap-5 mt-4">
              {vehicleData.map((vehicle, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-4 bg-white border border-gray-200 hover:border-gray-400 shadow hover:shadow-lg rounded-xl p-3 transition-all duration-200 hover:bg-gray-50 hover:scale-[1.02] active:ring-2 active:ring-black"
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <div className="h-[70px] w-[80px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img className="h-full w-full object-cover" src={vehicle.img} alt="car" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h2 className="flex gap-2 font-semibold items-center text-lg">{vehicle.name} <span><FaUser /></span> {vehicle.seats}</h2>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-gray-600 text-sm">{vehicle.eta}</span>
                      <span className="flex items-center gap-1 text-green-700 font-bold text-lg">
                        <FaIndianRupeeSign />
                        {vehicle.price}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{vehicle.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}


        {/* Confirm Section */}
        {(selectedVehicle && !confirmRide ) && (
          <div className="relative pointer-events-auto w-full md:w-[500px] mx-auto bg-white shadow-2xl rounded-t-2xl p-6 transition-all duration-500 border-none animate-fadeInUp">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-center w-full">Confirm your ride</h2>
              <button
                className="absolute -top-0 right-3 text-3xl text-gray-700 hover:text-black transition-all"
                aria-label="Back"
                onClick={() => setSelectedVehicle(null)}
              >
                <IoArrowBackCircle />
              </button>
            </div>
            <div className="flex flex-col items-center gap-4 mt-5">
              <div className="h-[150px] w-[200px] rounded-lg overflow-hidden ">
                <img className="h-full w-full object-cover" src={selectedVehicle.img} alt="car" />
              </div>
              <div className="w-full px-4">
                <div className="flex gap-2 items-center mb-3 text-left">
                  <IoLocationSharp className="text-xl text-blue-600" />
                  <span>
                    <h1 className="font-bold text-base">{pickupLocation.address}</h1>
                    <h3 className="text-xs text-gray-500">{pickupLocation.description}</h3>
                  </span>
                </div>
                <div className="flex gap-2 items-center mb-3 text-left">
                  <IoLocationSharp className="text-xl text-red-500" />
                  <span>
                    <h1 className="font-bold text-base">{dropLocation.address}</h1>
                    <h3 className="text-xs text-gray-500">{dropLocation.description}</h3>
                  </span>
                </div>
                <div className="flex gap-2 items-center mb-3">
                  <IoMdCash className="text-xl text-green-600" />
                  <span className="flex gap-2 items-center text-lg font-bold">
                    <FaIndianRupeeSign />{selectedVehicle.price}
                  </span>
                  <span className="text-gray-700 ml-2">Cash</span>
                </div>
              </div>
              <button onClick={()=>setConfirmRide(true)} className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl py-3 text-xl font-bold shadow hover:from-green-600 hover:to-green-800 transition-all duration-200 mt-2">
                Confirm
              </button>
            
            </div>
          </div>
        )}

          { 
        confirmRide && (
            <LookingForDriver selectedVehicle={selectedVehicle}
             pickupLocation={pickupLocation}
             dropLocation={dropLocation}/>
        )
     }
      </div>
    </div>
  
  )

}

export default ChooseVehicle














