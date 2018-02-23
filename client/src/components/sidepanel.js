import React from 'react';

const Sidepanel = (props) => {
    console.log(props)
    return (
        <div className="sidepanel">

        <div className="temphead">
            <div className="temperature">{Math.round(props.temperature*10)/10}<sup>o</sup></div>
                
            <div className="degree"> 
                <label class="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                    </label>
                            
                <div>
                    F   | C    
                </div>
                    
            
                </div>
            </div>
            


            <div className="subpanel">
                <div className="row">
                    <div className="col-xs-6 subname">
                    Feels Like:
                    </div>
                    <div className="col-xs-4 subname">
                    {props.feelslike}
                    </div>
                    <div className="col-xs-2 ico">
                    <img src="temperature.png" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 subname">
                    Chance Of Rain:
                    </div>
                    <div className="col-xs-4 subname">
                    {props.precipitationChance} %
                    </div>
                    <div className="col-xs-2 ico">
                    <img src="precipitation.png" alt=""/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6 subname">
                    Humidity:
                    </div>
                    <div className="col-xs-4 subname">
                    {props.humidity} %
                    </div>
                    <div className="col-xs-2 ico">
                    <img src="humidity.png" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 subname">
                    WindSpeed:
                    </div>
                    <div className="col-xs-4 subname">
                    {props.windspeed} km/h
                    </div>
                    <div className="col-xs-2 ico">
                    <img src="windspeed.png" alt=""/>
                    </div>
                </div>
            </div>
       
        </div>
    )
}
 
export default Sidepanel;