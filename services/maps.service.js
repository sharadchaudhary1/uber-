
const axios= require('axios')

module.exports.getAddressCoordinate=async(address)=>{
     
    const apikey=process.env.GOOGLE_MAPS_API

    const url=`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${apikey}
`

    try{
        const response=await axios.get(url)
               
        console.log(response)
        if(response.data.features && response.data.features.length > 0){
            const location=response.data.features[ 0 ].properties 

            return{
                ltd:location.lat,
                lng:location.lon
            }
        }
        else{
            throw new Error('Unable to fetch coordinates')
        }
    }
    catch(err){
        console.log(err)

    }
}


module.exports.getDistanceTime=async(origin,destination)=>{
    if(!origin||!destination){
        throw new Error ('origin and destination are required')
    }
    
    const apikey=process.env.GOOGLE_MAPS_API
 


    const originCoords = await this.getAddressCoordinate(origin) 

  const destinationCoords =await this.getAddressCoordinate(destination)
   
  console.log(originCoords)
  console.log(destinationCoords)

  const url = `https://api.geoapify.com/v1/routing?waypoints=${originCoords.ltd},${originCoords.lng}|${destinationCoords.ltd},${destinationCoords.lng}&mode=drive&apiKey=${apikey}`;


  try{
     
    const response=await axios.get(url);

     if (!response.data.features?.length) {
      throw new Error("No route found between these locations");
    }
  
     const route = response.data.features[0].properties;
     console.log(route)
     
     return{
          origin: origin,
      destination: destination,
      distance: (route.distance / 1000).toFixed(2),
      duration: (route.time / 60).toFixed(2),
      mode: route.mode,
     }
     
  }catch(error){
    console.log('Do not find a path between these location',error.message)
  }
}


module.exports.getAutoSuggestion=async(input)=>{

const apiKey = process.env.GOOGLE_MAPS_API
 const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(input)}&limit=10&apiKey=${apiKey}`;

 try{
    const response=await axios.get(url)

    if(!response.data.features.length){
        return []
    }
//   console.log(response.data.features)
    const suggestions=response.data.features.map((sugg)=>({
         name:sugg.properties.formatted,
         lat:sugg.properties.lat,
         lon:sugg.properties.lon,
         country:sugg.properties.country,
         city:sugg.properties.city
    }))

    console.log(suggestions)

    return suggestions

 }catch(error){
    console.log(error.message)
 }
}