

import React from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const CaptainRiding = () => {
    const navigate=useNavigate()
  return (
 <div className="relative overflow-x-hidden border-none h-screen w-screen bg-white font-sans">
      <img
        className="fixed top-0 left-0 w-full h-4/5 object-cover z-0"
        src="https://i.sstatic.net/gtiI7.gif"
        alt="map"
      />

      <img
        className="absolute h-20 w-25 ml-5 mt-8 z-20"
        src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png"
        alt="logo"
      />

      <button className="absolute bg-white p-2 rounded-full right-8 top-9 cursor-pointer text-3xl font-bold z-20  ">
        <RiLogoutBoxLine />
      </button>
      
      <div className='bg-yellow-300 w-full rounded-t-lg h-1/5 absolute bottom-0'>
     <h1 className='text-center text-2xl font-semibold pt-5'>Ride started  </h1>

     <div className='flex justify-center  items-center my-12 gap-14'>
        <h3 className='text-2xl font-medium'>
            3 Km away 
        </h3>

        <button onClick={()=>navigate('/finish')} className='bg-green-400 px-3 py-2 text-2xl font-medium rounded-lg'>Ride Completed </button>
     </div>
      </div>
    
    </div>
  )
}

export default CaptainRiding