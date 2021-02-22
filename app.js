const express=require("express");
const https=require("https");

const app= express();

app.get("/",function(req,res){

    const url="https://api.openweathermap.org/data/2.5/weather?q=dhanbad&units=metric&appid=beb845a606ff781dd3a3c98bf696ec9e";

    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData=JSON.parse(data)
            const temp=weatherData.main.temp
            const weatherdescription = weatherData.weather[0].description
            const icon=weatherData.weather[0].icon
            const imageURL="http://openweathermap.org/img/wn"+icon+"@2x.png"           
            res.write("<p>The weather is currently"+weatherdescription+"<p>");
            res.write("<h1>The temp in dhanbad is"+temp+"degrees celcius.</h1>");
            res.write("<img src="+imageURL+">");
            res.send();
        })

    })

    

})

app.listen(3000, function(){
    console.log("server is running on port 3000");
})