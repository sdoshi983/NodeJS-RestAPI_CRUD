// importing necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/industryMasters', {useNewUrlParser: true}).then(() => { // if connected successfully
    console.log('db connected ..'); 
}).catch((e) => {   // else catch the error, i.e. exception handling
    console.log(e.toString());
})