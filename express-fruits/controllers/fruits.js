const express = require('express');
const router = express.Router();
const Fruits = require('../models/fruit');


//this is the index route, shows the fruits
router.get('/', function(req,res) {
    res.send('here is all the fruit')
})