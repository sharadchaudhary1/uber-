



import React from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { IoMdCash } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'

const LookingForDriver = ({selectedVehicle,pickupLocation,dropLocation}) => {
  return (

   
         <div className="relative pointer-events-auto w-full md:w-[500px] mx-auto bg-white shadow-2xl rounded-t-2xl p-6 transition-all duration-500 border-none animate-fadeInUp">
             <div className="flex items-center justify-between">
               <h2 className="text-2xl font-bold text-center w-full">Confirm your ride</h2>
       
             
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
            
             
             </div>
           </div>
  
     
  )
}

export default LookingForDriver