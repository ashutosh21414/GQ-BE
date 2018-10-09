"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');

const moment = require('moment');
Promise.promisifyAll(mongoose);
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email:{
      type:String
  },
  password:{
    type:String
  },
  name:{
      type:String
  }
}, {
    versionKey: false
});


var User = mongoose.model('User', UserSchema);
module.exports = User;