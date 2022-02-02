// importing necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const uri = "mongodb+srv://sd:sdoshi983@cluster0.0nb30.mongodb.net/industryMasters?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true}).then(() => { // if connected successfully
    console.log('db connected ..'); 

    const app = express(); // initializing our app
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.listen(3000, () => {    // starting server
        console.log('server started');
    });
    

}).catch((e) => {   // else catch the error, i.e. exception handling
    console.log(e.toString());
})