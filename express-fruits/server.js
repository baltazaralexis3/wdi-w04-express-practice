//this is where we require everything

const express = require('express');
const app = express();
require('./db/db'),


app.get('/', function(req, res) {
    res.send('hello');
});

app.listen(3000, function() {
    console.log('listening on port 3k')
});


