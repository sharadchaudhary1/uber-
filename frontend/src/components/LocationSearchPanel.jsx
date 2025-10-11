
import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const LocationSearchPanel = () => {

    const locations=["Mit moradabad near wave mall moradabad (uttarpradesh)",
        "wave  moradabad ",
        "tmu  moradabad "
    ]

    const navigate=useNavigate()

  return (
    <div className='mt-9 flex flex-col gap-4 '>

        {
            locations.map((location,idx)=>{
                return (
                        <div key={idx} onClick={()=>navigate('/vehicle')} className='flex gap-4 rounded-lg border-2 border-gray-50 active:border-black  items-center mx-6 cursor-pointer '>
        <h2 className=' text-xl cursor-pointer h-10 w-10 pt-3 pl-1 bg-gray-50 items-center justify-center rounded-xl '> <IoLocationSharp /> </h2>

        <h2 className='text-xl items-center'> {location} </h2>
       </div>

                )
            })
        }
       
    

        

    </div>
  ) 
}

export default LocationSearchPanel