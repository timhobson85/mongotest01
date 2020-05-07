const mongoose = require('mongoose');
  env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
  envConfig = require('../server/env')[env];

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/monogodb-relationships');

mongoose.connection.on('connected', function () {
  console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connectione error: ' + err);
});

mongoose.connection.on('disconnectied', function() {
  console.log('Mongoose defualt connection disconnted');
});