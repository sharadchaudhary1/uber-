

// import React, { useState } from 'react'
// import { IoIosArrowDown } from "react-icons/io";

// export const UserHome = () => {
    
//   const[pickUp,setPickUp]=useState('')
//   const [destination,setDestination]=useState('')

//   const [pickUpPanel,setPickUpPanel]=useState(false)


//   function handleSubmit(e){
//     e.preventDefault()
//   }

//   return (
//     <div className='h-screen  relative' >

//         <img
//           className="h-18 w-20 ml-5 mt-8 absolute "
//           src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
//         />

//       <div className="h-screen w-screen">
//   <img
//     className=" w-full h-full object-cover "
//     src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
//   />
// </div>

// <div className="flex flex-col  w-full  top-0 h-screen   ">

// <div className='h-[30%] bg-white relative p-6' >

//   <div className='absolute right-7 text-2xl ' >
//     <IoIosArrowDown />
//     </div>
//   <h2 className="text-2xl font-semibold  mb-5">Find a Ride</h2>
    
//   <form onSubmit={(e)=>handleSubmit(e)} className="flex relative flex-col  gap-7">
//     <div className='line bottom-6 left-4 bg-gray-600 h-20 w-1 absolute'></div>

//     <input
//         onClick={()=>setPickUpPanel(true)}

//     value={pickUp}
//     onChange={(e)=>setPickUp(e.target.value)}
//       type="text"
//       placeholder="Enter pick-up location"
//       className="bg-[#eee] border rounded-lg text-lg px-10 py-3"
//     />
     
   
//     <input
//          onClick={()=>setPickUpPanel(true)}
//       value={destination}
//       onChange={(e)=>setDestination(e.target.value)}
//       type="text"
//       placeholder="Enter destination location"
//       className="bg-[#eee] text-lg border rounded-lg px-10 py-3"
//     />
//   </form>
// </div>

//   <div className='bg-red-400 h-0' >  </div>
// </div>


//     </div>
//   )
// }







import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";

export const UserHome = () => {
  const [pickUpPanel, setPickUpPanel] = useState(false);
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");

  const panelRef = useRef(null);
  const extraDivRef = useRef(null);
  const mapRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    if (pickUpPanel) {
      // Move form panel to top, 30% height
      gsap.to(panelRef.current, { top: 0, bottom: "auto", height: "30%", duration: 0.5 });
      // Extra div below form, height 70%
      gsap.to(extraDivRef.current, { top: "30%", height: "70%", duration: 0.5 });
      // Map behind panel hidden
      gsap.to(mapRef.current, { opacity: 0, duration: 0.5 });
      // Arrow visible
      gsap.to(arrowRef.current, { opacity: 1, duration: 0.5 });
    } else {
      // Form panel back to bottom
      gsap.to(panelRef.current, { bottom: 0, top: "auto", height: "30%", duration: 0.1 });
      // Extra div shrinks to 0
      gsap.to(extraDivRef.current, { height: 0, top: "auto", duration: 0.1 });
      // Map visible
      gsap.to(mapRef.current, { opacity: 1, duration: 0.5 });
      // Arrow hidden
      gsap.to(arrowRef.current, { opacity: 0, duration: 0.5 });
    }
  }, [pickUpPanel]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Map */}
      <img
        ref={mapRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="map"
      />

      {/* Logo */}
      <img
        className="absolute h-18 w-20 ml-5 mt-8 z-20"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="logo"
      />

      {/* Form Panel */}
      <div
        ref={panelRef}
        className="absolute left-0 w-full h-[30%] bottom-0 bg-white p-6 rounded-t-xl shadow-lg z-20"
        // style={{ bottom: 0, height: "30%" }}
      >
        <div
          ref={arrowRef}
          className="absolute right-7 opacity-0 text-2xl cursor-pointer"
          // style={{ opacity: 0 }}
          onClick={() => setPickUpPanel(false)}
        >
          <IoIosArrowDown />
        </div>
        <h2 className="text-2xl font-semibold mb-5">Find a Ride</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter pick-up location"
            className="bg-[#eee] border rounded-lg px-4 py-3 text-lg"
            value={pickUp}
            onChange={(e) => setPickUp(e.target.value)}
            onClick={() => setPickUpPanel(true)}
          />
          <input
            type="text"
            placeholder="Enter destination location"
            className="bg-[#eee] border rounded-lg px-4 py-3 text-lg"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onClick={() => setPickUpPanel(true)}
          />
        </form>
      </div>

      {/* Extra Div */}
      <div
        ref={extraDivRef}
        className="absolute left-0 w-full bottom-0 h-0 bg-white z-10"
        
      >
        {pickUpPanel && <LocationSearchPanel/>}
       
        </div>
    </div>
  );
};
