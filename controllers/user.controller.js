

const userModel=require('../models/user.models')
const userService=require('../services/user.service')
const {validationResult} =require('express-validator')

const blacklistTokenModel=require('../models/blacklistToken.model') 

module.exports.registerUser=async(req,res,next)=>{
    
    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
       
    const{fullname:{firstname,lastname},email,password}=req.body;

      const isUserAlreadyExist=await userModel.findOne({email})
   
    if(isUserAlreadyExist){
        return res.status(400).json({message:'user already exist with this email choose another email or go to the login page'})
    }

    const hashedpassword=await userModel.hashPassword(password)

    const user=await userService.createUser({
        firstname,
        lastname,
        email,
        password:hashedpassword
    })

    const token=user.generateAuthToken();
    res.status(201).json({token,user})

}




module.exports.loginUser=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})

    }

    const {email,password}=req.body;

    const user=await userModel.findOne({email}).select('+password')

    if(!user){
        res.status(401).json('Invalid email or password')
    }

    const isMatch=await user.comparePassword(password)

    if(!isMatch){
        return res.status(401).json('invalid email or password')
    }

      const token=user.generateAuthToken()
      res.cookie('token',token)
      res.status(200).json({token,user})
}


module.exports.getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user)
}


module.exports.logoutUser=async(req,res,next)=>{
    res.clearCookie('token')
    const token=req.cookie.token||req.headers.authorization?.split(' ')[1]
    await blacklistTokenModel.create({token})
    res.status(401).json({message:"logged out"})
}

