

const dotenv=require('dotenv')
dotenv.config()

const express=require('express')
const cors=require('cors')
const cookieparser=require('cookie-parser')
const app=express()
const connectToDb=require('./db/db')
const userRoutes=require('./routes/user.routes')
const captainRoutes=require('./routes/captain.routes')
const mapsRoutes=require('./routes/maps.routes')
const rideRoutes=require('./routes/ride.routes')
connectToDb()

app.use(cors({
  origin: 'http://localhost:5173',   
  credentials: true,                 
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/users',userRoutes)
app.use('/captains',captainRoutes)

app.use('/maps',mapsRoutes)

app.use('/rides',rideRoutes)

module.exports=app;
