// importing necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes");

const uri = "mongodb+srv://sd:sdoshi983@cluster0.0nb30.mongodb.net/industryMasters?retryWrites=true&w=majority";
const local = 'mongodb://localhost:27017/industryMasters';
mongoose.connect(local, {useNewUrlParser: true}).then(() => { // if connected successfully
    console.log('db connected ..'); 

    const app = express(); // initializing our app
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(routes);

    app.listen(3000, () => {    // starting server
        console.log('server started');
    });
    

}).catch((e) => {   // else catch the error, i.e. exception handling
    console.log(e.toString());
})