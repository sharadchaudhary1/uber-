
const { validationResult } = require('express-validator')
const captainModel=require('../models/captain.model')
const captainservice=require('../services/captain.service')
const blacklistTokenModel = require('../models/blacklistToken.model')


module.exports.registerCaptain=async(req,res,next)=>{
    const errors=validationResult(req)

    if(!errors.isEmpty()){
      return  res.status(400).json({errors:errors.array()});

    }

    const {fullname,email,password,vehicle}=req.body

    const isCaptainAlreadyExist=await captainModel.findOne({email})
   
    if(isCaptainAlreadyExist){
        return res.status(400).json({message:'captain already exist with this email choose another email or go to the login page'})
    }

    const hashedpassword=await captainModel.hashPassword(password)

    const captain=await captainservice.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedpassword,
        color:vehicle.color,
        vehicleNo:vehicle.vehicleNo,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
        
    })

    const token =captain.generateAuthToken();
    res.status(201).json({token,captain})
    
}

module.exports.loginCaptain=async(req,res,next)=>{
    const errors=validationResult(req)

    if(!errors.isEmpty()){
  return res.status(400).json({errors:errors.array()})
    }

    const {email,password}=req.body;

    const captain=await captainModel.findOne({email}).select('+password')
    if(!captain){
        return res.status(401).json({message:'invalid email or password'})

    }

    const isMatch=await captain.comparePassword(password)

    if(!isMatch){
        return res.status.json({message:'invalid email or password'})

    }
     
    const token= captain.generateAuthToken()

    res.cookie('token',token)

    res.status(200).json({token,captain})

}       


module.exports.getCaptainProfile=async(req,res,next)=>{
    res.status(200).json({captain:req.captain})
}


module.exports.logoutCaptain=async(req,res,next)=>{
    const token=req.cookies.token||req.headers.authorization?.split(' ')[1]
    await blacklistTokenModel.create({token})

    res.clearCookie('token');

    res.status(200).json({message:"logout successfully"})
}