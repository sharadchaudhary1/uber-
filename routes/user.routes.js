
const express=require('express')

const router=express.Router()

const {body}=require('express-validator')
const usercontroller=require('../controllers/user.controller')
const authMiddleware=require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
   body('fullname.firstname').isLength({min:3}).withMessage('firstname should be minimum 3 characters'),
   body('password').isLength({min:6}).withMessage('password sshold be minimum 6 length')

],
usercontroller.registerUser
)



router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password length should be minimum 6')
    
],
usercontroller.loginUser
)



router.get('/profile',authMiddleware.authUser,usercontroller.getUserProfile)

router.get('/logout',authMiddleware.authUser,usercontroller.logoutUser)



module.exports=router;
 