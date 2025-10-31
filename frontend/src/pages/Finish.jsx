
import React, { useState } from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { IoMdCash } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { RiLogoutBoxLine } from 'react-icons/ri'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom'

const Finish = () => {
  const [celebrate, setCelebrate] = useState(false)
  const [showHomeModal, setShowHomeModal] = useState(false)
  const navigate = useNavigate()

  function handleFinishRide() {
    setCelebrate(true)
    setTimeout(() => {
      setCelebrate(false)
      setShowHomeModal(true)
    }, 4000)
  }

  function handleGoHome() {
    setShowHomeModal(false)
    navigate('/captain')
  }

  return (
    <div className="relative overflow-x-hidden border-none h-screen w-screen bg-gradient-to-br from-yellow-50 via-green-100 to-blue-50 font-sans">
      {/* Celebration Confetti */}
      {celebrate && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={350}
          recycle={true}
          gravity={0.15}
        />
      )}

      {/* Modal Popup for Home Navigation */}
      {showHomeModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-3 text-green-700">🎉 Ride Finished Successfully!</h2>
            <p className="text-md text-gray-700 mb-8 text-center">Thank you for riding with us.<br />Want to go back to the Home page?</p>
            <button
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl px-8 py-3 text-lg font-bold shadow-lg transition-all duration-250 active:scale-95"
              onClick={handleGoHome}
            >
              Go to Home Page
            </button>
          </div>
        </div>
      )}

      {/* Background Map */}
      <img
        className="fixed top-0 left-0 w-full h-[35vh] object-cover z-0 opacity-90"
        src="https://i.sstatic.net/gtiI7.gif"
        alt="map"
      />

      {/* Logo */}
      <img
        className="absolute h-16 w-16 ml-5 mt-8 z-20 drop-shadow-xl"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="logo"
      />

      {/* Logout Button */}
      <button className="absolute bg-white p-2 rounded-full right-8 top-9 cursor-pointer text-3xl font-bold z-20 shadow-lg hover:bg-gray-100 transition">
        <RiLogoutBoxLine />
      </button>

      {/* Main Panel */}
      <div className="w-full h-[65vh] rounded-t-3xl absolute bottom-0 bg-white shadow-2xl flex flex-col items-center px-2 pb-8 pt-4 animate-fadeInUp">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-2 tracking-tight">Finish this Ride</h2>
        
        {/* Rider Card */}
        <div className="flex items-center bg-gradient-to-r from-yellow-300 to-yellow-200 shadow-lg w-[90%] mx-auto rounded-xl py-4 px-8 mt-3 mb-2 justify-between">
          <div className="flex gap-3 items-center">
            <img
              className="h-14 w-14 rounded-full border-2 border-white shadow"
              src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q"
              alt="Rider"
            />
            <h1 className="text-xl font-bold text-gray-900">Harsh Patel</h1>
          </div>
          <div>
            <h1 className="flex items-center text-lg font-medium text-gray-700">2.2 km</h1>
          </div>
        </div>

        {/* Trip Info */}
        <div className="flex flex-col justify-evenly px-6 mt-3 gap-3 py-5 w-full max-w-md mx-auto">
          <div className="flex gap-3 items-center mb-1 text-left">
            <IoLocationSharp className="text-2xl text-blue-600" />
            <span>
              <h1 className="font-bold text-lg">Civil Lines</h1>
              <h3 className="text-xs text-gray-500">Roorkee</h3>
            </span>
          </div>
          <div className="flex gap-3 items-center mb-1 text-left">
            <IoLocationSharp className="text-2xl text-red-500" />
            <span>
              <h1 className="font-bold text-lg">Ramnagar</h1>
              <h3 className="text-xs text-gray-500">Roorkee</h3>
            </span>
          </div>
          <div className="flex items-center mb-1">
            <IoMdCash className="text-2xl text-green-600" />
            <span className="flex pl-2 items-center text-xl font-bold text-green-800">
              <FaIndianRupeeSign className="mr-1" />
              121.3
            </span>
            <p className="text-gray-700 ml-3 font-medium">Cash</p>
          </div>
        </div>
           
        {/* Finish Button */}
        <div className="flex flex-col gap-2 w-4/5 mx-auto mt-4">
          <button
            className={`bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl py-3 text-xl font-bold shadow-lg transition-transform duration-300 active:scale-95`}
            onClick={handleFinishRide}
            disabled={celebrate}
          >
            {celebrate ? 'Ride Finished!' : 'Finish Ride'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Finish;