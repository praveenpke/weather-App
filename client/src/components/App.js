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
            feelslike:''
           
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
                feelslike:response.data.currently.apparentTemperature
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
                <div className="main ">
                <div className="col-md-4 col-xs-12">
                    <img className="gif animated fadeInLeft" src={this.renderWeather(this.state.icon)}>
                    
                    </img>
                </div>
                  
                    <div className="display col-md-8 col-xs-12 animated fadeInRight">
                       
                        <Sidepanel {...this.state}/>
                    </div>
                    
                </div>
                
            )
        }
    }
    
    renderWeather(icon){
     
        if(icon.includes('day')){
            return 'sunny.gif';
        }else if(icon.includes('night')){
            return 'cloudy-sunny-full.gif';
        }else if(icon.includes('cloudy')){
         
            return 'cloudy-sunny.gif';
        }else if(icon.includes('rain')){
            return 'rainy-day.gif';
        }else if(icon.includes('fog')){
            return 'cloudy-sunny-full.gif';
        }
        else{
            return '';
        }
    }

  
    render() { 
        return ( 
        
            <div  id="weather" >
                <div >
                    


                    <form onSubmit={this.getWeather}>
                        <div className="form-group">
                            
                            <div className="searchbar">
                                <input type="text"  className="form-control" name="weather" placeholder="Enter Location..." />
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