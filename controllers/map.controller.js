

const mapservice =require('../services/maps.service')


module.exports.getCoordinates=async(req,res)=>{
    const {address}=req.query;

    try{
        const coordinates=await mapservice.getAddressCoordinate(address)

        res.status(200).json(coordinates)
    }
    catch(err){
        res.status(404).json({
            message:'this address is not found'
        })
    }
}


module.exports.getDistanceTime=async(req,res,next)=>{


    try{
      const {origin,destination}=req.query
        
      const distanceTime=await mapservice.getDistanceTime(origin,destination)
      res.status(200).json(distanceTime)

    }
    catch(error){
        console.log(error)
    }
}


module.exports.getAutoSuggestion=async(req,res,next)=>{

    try{

        const {input}=req.query;
    
        const suggestions=await mapservice.getAutoSuggestion(input)
        res.status(200).json(suggestions)
    }
    catch(error){
        console.log(error.message)
    }

}