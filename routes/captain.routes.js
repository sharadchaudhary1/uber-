
const captainController=require('../controllers/captain.controller')
const express=require('express')

const router=express.Router()
const authMiddleware=require('../middlewares/auth.middleware')

const {body}=require('express-validator')



router.post('/register',[
        body('email').isEmail().withMessage('Invalid Email'),
   body('fullname.firstname').isLength({min:3}).withMessage('firstname should be minimum 3 characters'),
   body('password').isLength({min:6}).withMessage('password sshold be minimum 6 length'),
   body('vehicle.capacity').isInt({min:1}).withMessage('capacity of vehicle atleast 1'),
   body('vehicle.vehicleType').isIn(['car','bike','auto']).withMessage('Inavlid vehicle selection ')
   
],
    captainController.registerCaptain
)


router.post('/login',[
            body('email').isEmail().withMessage('Invalid Email'),
   body('password').isLength({min:6}).withMessage('password sshold be minimum 6 length'),

],captainController.loginCaptain
)


router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)


module.exports=router;