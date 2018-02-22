const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');



app.use(cors());

//parse the json in incoming request
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(express.static(path.join(__dirname,'client/public')));


app.get('/',function(req,res){
    res.send("Hello World! Coming from the server")
});

app.get('/api/weather',function(req,res){
    console.log(req.query);
    location = encodeURIComponent(req.query.data);
    
    var geoCodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${location}`;

    axios.get(geoCodeUrl)
        .then((response)=>{
            if(response.data.status ==='ZERO_RESULTS'){
                throw new Error('Unable to find that address.');
            }
        
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var weatherUrl = `https://api.darksky.net/forecast/de182a3e669702c1bbc202ca4124afc8/${lat},${lng}`;
            
            console.log(response.data.results[0].formatted_address);

            return axios.get(weatherUrl);

        }).then((response)=>{
            var temperature = response.data.currently.temperature;
            var apparentTemperature = response.data.currently.apparentTemperature;

            res.send(response.data);
            console.log(`Its currently ${temperature}. It feels like ${apparentTemperature}`)


        }).catch((e)=>{
            if(e.code === 'ENOTFOUND'){
                console.log('Unable to connect to Api servers');
            }
            else{
                console.log(e.message);
            }
            
        })

})


app.use(bodyParser.json()) //using middleware body parser to parse post request object
app.use(bodyParser.urlencoded({ extended: true })); //support encoded urls



const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('server running');
});