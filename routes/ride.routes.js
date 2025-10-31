

const express=require('express')

const rideController=require('../controllers/ride.controller')
const authMiddleware=require('../middlewares/auth.middleware')
const router=express.Router()

router.post('/create',authMiddleware.authUser,rideController.createRide)

router.get('/get-fare',authMiddleware.authUser,rideController.getFare)
module.exports=router;
