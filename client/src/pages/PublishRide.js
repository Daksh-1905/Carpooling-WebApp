import React from 'react'

function PublishRide() {

    let citiesList = [];

    fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
    .then((res)=>res).then((data)=>{citiesList = data})
    .catch((err)=>console.log(err))



  return (
    <div>
      <h1>Publish Ride</h1>
    </div>  
  )
}

export default PublishRide