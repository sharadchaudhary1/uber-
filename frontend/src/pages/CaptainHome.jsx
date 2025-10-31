



import React from 'react'
import { CiLogout } from "react-icons/ci"
import { FaIndianRupeeSign, FaRupeeSign } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import { RiLogoutBoxLine, RiSpeedUpLine } from "react-icons/ri";
import { LuNotebook } from "react-icons/lu";
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';
import { useEffect } from 'react';
import { useContext } from 'react';

const CaptainHome = () => {

  const {captain,setCaptain}=useContext(CaptainDataContext)
 
  useEffect(()=>{

    async function currentCaptain(){
      const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{withCredentials:true})
      setCaptain(res.data.captain)
   
    }
    currentCaptain()
  },[])
  console.log(captain)

  return (
    <div className="relative overflow-x-hidden border-none h-screen w-screen bg-white font-sans">
   
      <img
        className="fixed top-0 left-0 w-full h-3/5 object-cover z-0"
        src="https://i.sstatic.net/gtiI7.gif"
        alt="map"
      />

   
      <img
        className="absolute h-18 w-20 ml-5 mt-8 z-20"
        src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png"
        alt="logo"
      />
      
      <button className='absolute bg-white p-2 rounded-full right-8 top-9 cursor-pointer text-3xl font-bold z-20  '>
     <RiLogoutBoxLine />
      </button>


      <div className='w-full h-2/5  absolute bottom-0 '>

      <div className='flex items-center px-8 mt-8 justify-between'>
        <div className='flex gap-2 items-center'>
            <img className='h-12 w-12 rounded-full' src='https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q' ></img>
            <h1 className='text-xl capitalize font-semibold'>{captain.fullname.firstname + " "+ captain.fullname.lastname} </h1>
        </div>
        <div className='flex flex-col'> 
             <h1 className='flex items-center text-xl font-medium '><FaIndianRupeeSign /> 295 </h1>
             <p>Earned</p>
        </div>
      </div>

      <div className='flex justify-evenly w-4/5 bg-gray-100 mt-12 ml-10 rounded-md items-center py-8  '>
        <div className='text-2xl  flex flex-col items-center'>
      <IoMdTime />
      <h3>10.2 </h3>
      <p className='text-sm'>Hours online</p>
        </div>
         <div className='text-2xl  flex flex-col items-center'>
            <RiSpeedUpLine />
             <h3>10.2 </h3>
      <p className='text-sm'>Hours online</p>
        </div>
         <div className='text-2xl  flex flex-col items-center'>
            <LuNotebook />
             <h3>10.2 </h3>
      <p className='text-sm'>Hours online</p>
        </div>

      </div>

    

      </div>

</div>
  )
}

export default CaptainHome