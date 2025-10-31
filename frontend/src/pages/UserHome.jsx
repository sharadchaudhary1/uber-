
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserHome = () => {
  const [pickUpPanel, setPickUpPanel] = useState(false);
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [suggestions,setSuggestions]=useState([])
    const [activeField, setActiveField] = useState(null); 

  const panelRef = useRef(null);
  const extraDivRef = useRef(null);
  const mapRef = useRef(null);
  const arrowRef = useRef(null);
   const navigate = useNavigate(); 

  useEffect(() => {
    if (pickUpPanel) {
   
      gsap.to(panelRef.current, { top: 0, bottom: "auto", height: "30%", duration: 0.5 });

      gsap.to(extraDivRef.current, { top: "30%", height: "70%", duration: 0.5 });
   
      gsap.to(mapRef.current, { opacity: 0, duration: 0.5 });

      gsap.to(arrowRef.current, { opacity: 1, duration: 0.5 });
    } else {
 
      gsap.to(panelRef.current, { bottom: 0, top: "auto", height: "30%", duration: 0.1 });
 
      gsap.to(extraDivRef.current, { height: 0, top: "auto", duration: 0.1 });
      // Map visible
      gsap.to(mapRef.current, { opacity: 1, duration: 0.5 });
      // Arrow hidden
      gsap.to(arrowRef.current, { opacity: 0, duration: 0.5 });
    }
  }, [pickUpPanel]);


 async function getSuggestion(input){
    
  if(!input) return 
   try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/maps/get-suggestion?input=${encodeURIComponent(input)}`,
      { withCredentials: true }
    );
   

  setSuggestions(res.data)

  }
  catch(err){
    console.error("Error fetching suggestions:", err.message);
  }
}


function handleSelect(location) {
    if (activeField === "pickup") {
      setPickUp(location.name);
    } else if (activeField === "destination") {
      setDestination(location.name);
    }
 
 
  }



  function handleSubmit(e) {
  e.preventDefault();

  if (!pickUp || !destination) {
    alert("Please select both pickup and destination.");
    return;
  }

 
  localStorage.setItem("rideData", JSON.stringify({ pickUp, destination }));

  navigate("/vehicle");
}


  return (
    <div className="relative h-screen w-screen ">
      {/* Map */}
      <img
        ref={mapRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://i.sstatic.net/gtiI7.gif"
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="pickup"
            placeholder="Enter pick-up location"
            className="bg-[#eee] border rounded-lg px-4 py-3 text-lg"
            value={pickUp}
            onChange={(e) => {
              setPickUp(e.target.value)
              getSuggestion(e.target.value);

            }}
            onClick={() => {
              setActiveField("pickup");
              setPickUpPanel(true);
            }}
          />
          <input
            type="text"
            name="destination"
            placeholder="Enter destination location"
            className="bg-[#eee] border rounded-lg px-4 py-3 text-lg"
            value={destination}
             onChange={(e) => {
             setDestination(e.target.value);
              getSuggestion(e.target.value);
             }}
             onClick={() => {
              setActiveField("destination");
              setPickUpPanel(true);
            }}
           
          />
          <button type="submit" className="bg-black text-white  px-4 py-2 rounded-xl" >Find Trip</button>
        </form>
      </div>

      {/* Extra Div */}
      <div
        ref={extraDivRef}
        className="absolute left-0 w-full bottom-0 h-0 bg-white z-10"
        
      >
        {pickUpPanel && <LocationSearchPanel suggestions={suggestions} onSelect={handleSelect} />}
       
        </div>
    </div>
  );
};
