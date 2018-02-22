import React, { Component } from 'react';
import axios from 'axios';
import Sidepanel from './sidepanel';
class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            temperature:'',
            precipitationIntensity:'',
            precipitationChance:'',
            humidity:'',
            icon:'',
            windspeed:'',
            date:''
        }
        this.getWeather = this.getWeather.bind(this);
        this.renderTemperature = this.renderTemperature.bind(this);
    }
    

    
    
    getWeather(e){
        
        
        e.preventDefault();
        console.log(e.target.elements.weather.value);
        var location = e.target.elements.weather.value;

        axios.get('/api/weather',{
            params:{
                data:location
            }
        }).then((response)=>{
            console.log(response);
            this.setState({
                temperature:response.data.currently.temperature,
                precipitationIntensity:response.data.currently.precipIntensity,
                precipitationChance:response.data.currently.precipProbability,
                windspeed:response.data.currently.windSpeed,
                humidity:response.data.currently.humidity,
                icon:response.data.currently.icon,
                date:response.headers.date
            })

        })
        .catch((error)=>{
            console.log(error);
        })
    }


    renderTemperature(){
        if(this.state.temperature==''){
            return;
        }else{
            return(
                <div className="main">
                  
                    <div className="main__display">
                       
                        <p className="temperature">{Math.round(this.state.temperature*10)/10}</p>
                        <Sidepanel {...this.state}/>
                    </div>
                    
                </div>
                
            )
        }
    }
    
    renderWeather(icon){
        switch(icon){
            case 'cloudy':
                return 'cloudy'
                break;
            case 'clear-day':
                return 'clear-day'
                break;
            case 'clear-night':
                return 'clear-night'
                break;
            case 'rain':
                return 'rain'
                break;
            case 'snow':
                return 'snow'
                break;
            case 'sleet':
                return 'sleet'
                break;
            case 'wind':
                return 'wind'
                break;
            case 'fog':
                return 'fog'
                break;
            case 'cloudy':
                return 'cloudy'
                break;
            case 'partly-cloudy-day':
                return 'partly-cloudy-day'
                break;
            case 'partly-cloudy-night':
                return 'partly-cloudy-night'
                break;
            default:
                return 'defaultColor'
        }
    }

    renderInput(icon){
        switch(icon){
            case 'cloudy':
                return 'cloudy-input'
                break;
            case 'clear-day':
                return 'clear-day-input'
                break;
            case 'clear-night':
                return 'clear-night-input'
                break;
            case 'rain':
                return 'rain-input'
                break;
            case 'snow':
                return 'snow-input'
                break;
            case 'sleet':
                return 'sleet-input'
                break;
            case 'wind':
                return 'wind-input'
                break;
            case 'fog':
                return 'fog-input'
                break;
            case 'cloudy':
                return 'cloudy-input'
                break;
            case 'partly-cloudy-day':
                return 'partly-cloudy-day-input'
                break;
            case 'partly-cloudy-night':
                return 'partly-cloudy-night-input'
                break;
            default:
                return 'default-input'
        }
    }

    render() { 
        return ( 
        
            <div className={this.renderWeather(this.state.icon)} id="weather">
                <div>
                    <h1>Weather</h1>


                    <form onSubmit={this.getWeather}>
                        <div className="form-group">
                            <label htmlFor="weather">Enter Location Name:</label>
                            <div className="searchbar">
                                <input type="text" id={this.renderInput(this.state.icon)} className="form-control" name="weather" placeholder="Chennai,Mumbai etc.." />
                               <button className="search-btn"  type="submit"> <i className="fas fa-search"></i></button>
                            </div>
                            
                            
                        </div>
                        
                    
                    </form>

                    <div >
                           {this.renderTemperature()}
                        
            
                    </div>
                </div>
                
            </div>

            
         )
    }
}
 
export default App;