const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/fruits'

mongoose.connect(connectionString);

mongoose.on('connected', function() {
    console.log(`mongoose is connected at ${connectionString}`);
});

mongoose.on('disconnected', function () {
    console.log('mongoose is disconnected');
});

mongoose.on('error', function(error) {
    console.log('something went wrong with mongoose', error);
});

