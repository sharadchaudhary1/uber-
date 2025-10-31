
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';
   import Cookies from 'js-cookie';

const UserLogin = () => {
  
    const[email,setEmail]=useState('');
      const[password,setPassword]=useState('');
   

          const {user,setUser}=useContext(UserDataContext)
                   
           const navigate=useNavigate()
     
     

       async function handleSubmit(e){
          e.preventDefault()
          const UserData={
            email:email,
            password:password
          }

          const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,UserData,  { withCredentials: true })

          if(res.status==200){
            const data=res.data
            setUser(data.user)
         




            navigate('/user-home')
          }
          setEmail('')
          setPassword('')

        }

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-50" >

    <div className='p-7'>
        <img className='w-20 h-20  ml-3 mb-3 ' src='https://thumbs.dreamstime.com/b/web-183282931.jpg' />  
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
           
            <p className="text-xl text-gray-600 text-center mt-5">
          Don’t have an account?{' '}
          <Link
            to="/signup"
            className="text-black font-semibold hover:underline hover:text-gray-800"
          >
            Sign up
          </Link>
        </p>
    </div>

    <div className='p-7 mb-10 '>
        <Link to='/captain-login' className='block bg-green-400 py-3 rounded text-xl  hover:bg-green-300 flex items-center justify-center' >Sign in as Captain</Link>
    </div>
    </div>
  )
}

export default UserLogin