
import React, { useContext } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {

       const[email,setEmail]=useState('');
          const[password,setPassword]=useState('');

         
           const navigate=useNavigate()

           const {captain,setCaptain}=useContext(CaptainDataContext)
    
           async function handleSubmit(e){
              e.preventDefault()
              const Captain={
                email:email,
                password:password
              }

              const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,Captain,{withCredentials:true})

              if(res.status==200){
                const data=res.data
                setCaptain(data.captain)
                navigate('/captain-home')
              }
              setEmail('')
              setPassword('')
    
            }


  return (
      <div className="flex flex-col justify-between h-screen bg-gray-50" >

    <div className='p-7'>
        <img className='w-20 h-20  ml-3 mb-3 ' src='https://www.svgrepo.com/show/505031/uber-driver.svg' />  
        <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col '>
            <h2 className='text-2xl mb-3  text-center ' >Login to Uber</h2>
               
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type='email' required placeholder='Enter your Email' className='bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded '/>

            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
           
            type='password' placeholder='Enter Your Password' className='bg-[#eeeeee] w-full px-5 py-2 mt-2 rounded '/>

            <button type='submit' className='text-white bg-gray-700 font-semibold text-xl py-2 mt-3 rounded '>Login</button>
        </form>
           
            <p className="text-xl  text-gray-600 text-center mt-5">
          Register as a ?{' '}
          <Link
            to="/captain-signup"
            className="text-black font-semibold hover:underline hover:text-gray-800"
          >
            Captain
          </Link>
        </p>
    </div>

    <div className='p-7 mb-10 '>
        <Link to='/login' className=' bg-orange-300 py-3 rounded text-xl  hover:bg-green-300 flex items-center justify-center' >Sign in as User</Link>
    </div>
    </div>
  )
}

export default CaptainLogin