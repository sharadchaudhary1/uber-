
const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const captainschema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
        required:true,
        minlength:[3,'firstname should not be less than 3 characters']
        },
        lastname:{
            type:String
        }
    },
        email:{
            type:String,
            required:true,
            unique:true,

        },
        password:{
            type:String,
            required:true,
            select:false,

        },

        socketId:{
            type:String
        },

       status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'

       },

       vehicle:{
        color:{
            type:String,
            required:true,
        },
        vehicleNo:{
            type:String,
            required:true,

        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'capacity of vehicle must be altleast 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','bike','auto'],

        }
      


       },

       location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number
        }
       }

    
})

captainschema.methods.generateAuthToken=function(){
    const token =jwt.sign({_id:this.id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}


captainschema.methods.comparePassword=async function (password){
    return await  bcrypt.compare(password,this.password)
}

captainschema.statics.hashPassword=async function (password){
    return await bcrypt.hash(password,10)
}


const captainModel=mongoose.model('captain',captainschema)

module.exports=captainModel