
const rideservice=require('../services/ride.service')

module.exports.createRide=async(req,res)=>{
    const {pickup,destination,vehicleType}=req.body;

    try{
        const ride=await rideservice.createRide({user:req.user._id,pickup,destination,vehicleType})

        return res.status(201).json(ride)

    }
    catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}