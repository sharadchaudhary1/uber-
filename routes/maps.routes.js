

const express=require('express');

const router=express.Router()

const authMiddleware=require('../middlewares/auth.middleware')
const mapController=require('../controllers/map.controller')

router.get('/get-coordinate',authMiddleware.authUser,mapController.getCoordinates)

router.get('/get-distance-time',authMiddleware.authUser,mapController.getDistanceTime)

router.get('/get-suggestion',authMiddleware.authUser,mapController.getAutoSuggestion)

module.exports=router;
