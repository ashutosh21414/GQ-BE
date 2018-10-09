"use strict";
var mongoose = require('mongoose');

const moment = require('moment');

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