var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLString = require('graphql').GraphQLString;

var UserModel = require('../../models/user');
var userType = require('../types/user').userType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: { /*function () {*/
    // return {
      users: {
        type: new GraphQLList(userType),
        resolve: function () {
          const users = UserModel.find().exec()
          if (!users) {
            throw new Error('Error')
          }
          return users
        }
      },
      loginCheck:{
        type: new GraphQLList(userType),
        args: { email:{type: GraphQLString },password:{type: GraphQLString } },
        resolve: function (parentValue, args) {
            console.log(args);
          const users = UserModel.find({email:args.email,password:args.password}).exec()
          if (!users) {
            throw new Error('Error')
          }
          return users
        }
      }
    // }
  }
    
});

exports.login  = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
      return {
        users: {
          type: new GraphQLList(userType),
          resolve: function () {
            const users = UserModel.find().exec()
            if (!users) {
              throw new Error('Error')
            }
            return users
          }
        }
      }
    }
  });
