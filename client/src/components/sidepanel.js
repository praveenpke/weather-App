import React from 'react';

const Sidepanel = (props) => {
    console.log(props)
    return (
        <div className="sidepanel">

        <p className="temperature">{Math.round(props.temperature*10)/10}</p>
        
        Summary of the day
        <br/>
        Date:{props.date}
        <br/>
        Chance Of Rain: {props.precipitationChance}
        <br/>
        Intensity of Rain : {props.precipitationIntensity}
        <br/>
        Humidity: {props.humidity}
        
        <br/>
        WindSpeed:{props.windspeed}

       
        </div>
    )
}
 
export default Sidepanel;