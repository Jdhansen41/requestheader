var express = require('express');
var app = express();
var bodyParser = require("body-parser");

//MIDDLEWARE
app.use(bodyParser.json());


//ROUTES

//Get request to whoami will display json data on user IP address, operating system, and language
app.get("/whoami", function(req,res,next){
    var ip = req.headers['x-forwarded-for'];
    var lang = req.headers['accept-language'];
    var oper = req.headers['user-agent'];
    var result = {
        IP: ip,
        Language: lang,
        Operating_System: oper
    }
    res.json(result);
})

app.listen(process.env.PORT, process.env.IP, function(){ //What actually sets up the server
    console.log("Server is running");
});