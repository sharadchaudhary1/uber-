
import React from 'react'
import { IoLocationSharp } from "react-icons/io5";


const LocationSearchPanel = ({suggestions,onSelect}) => {


  

  return (
    <div className='mt-9 flex flex-col gap-4 '>

        {
            suggestions.map((location,idx)=>{
                return (
                        <div key={idx} 
                         onClick={() => onSelect(location)} 
                          className='flex gap-4 rounded-lg border-2 border-gray-50 active:border-black  items-center mx-6 cursor-pointer '>
        <h2 className=' text-xl cursor-pointer h-10 w-10 pt-3 pl-1 bg-gray-50 items-center justify-center rounded-xl '> <IoLocationSharp /> </h2>

        <h2 className='text-xl items-center'> {location.name} </h2>
       </div>

                )
            })
        }
       
    

        

    </div>
  ) 
}

export default LocationSearchPanel;