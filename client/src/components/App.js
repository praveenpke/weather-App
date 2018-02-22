import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            temperature:''
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
                temperature:response.data.currently.temperature
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
                <div className="display">
                    <p className="temperature">{this.state.temperature}</p>
                    
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <p>F/C</p>
                </div>
            )
        }
    }
    
    render() { 
        return ( 
            <div className="App">
                <div>
                    <h1 className="text-primary">Weather</h1>

                    <div >
                           {this.renderTemperature()}
                        
            
                    </div>

                    <form onSubmit={this.getWeather}>
                        <div className="form-group">
                            <label htmlFor="weather">Enter Location Name:</label>
                            <input type="text" className="form-control" name="weather" placeholder="Chennai,Mumbai etc.." />
                            
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    
                    </form>
                </div>
                
            </div>

            
         )
    }
}
 
export default App;