

const rideModel=require('../models/ride.model')
const mapservice=require('./maps.service')
const crypto =require('crypto')


function calculateFare(distance, vehicleType) {

    const rates = {
        auto: { base: 30, perKm: 12 },
        bike: { base: 20, perKm: 8 },
        car: { base: 50, perKm: 15 }
    };

    const { base, perKm } = rates[vehicleType];
    return base + (distance * perKm);
}

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('pickup and destination required');
    }

    const distanceTime = await mapservice.getDistanceTime(pickup, destination);
    const distance = distanceTime.distance; 
    const duration = distanceTime.duration; 

    return {
        auto: Math.round(calculateFare(distance, 'auto')),
        bike: Math.round(calculateFare(distance, 'bike')),
        car: Math.round(calculateFare(distance, 'car')),
        distance,
        duration
    };
}

module.exports.getFare=getFare;

function getOtp(num){
   function generateOtp(num){
    const otp=crypto.randomInt(Math.pow(10,num-1),Math.pow(10,num)).toString()
    return otp;
   }
   return generateOtp(num)
}

module.exports.createRide=async({user,pickup,destination,vehicleType})=>{

    if(!user ||!vehicleType||!pickup||!destination){
        throw new Error('all fields are required')
    }

    const fareDetails=await getFare(pickup,destination)
   const fare=fareDetails[vehicleType]

    const ride=rideModel.create({
        user,
        pickup,
        destination,
        fare,
        otp:getOtp(6),
        duration: fareDetails.duration,
        distance:fareDetails.distance

    })

    return ride
}

