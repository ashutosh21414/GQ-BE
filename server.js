const express = require("express");
const mongoose = require('mongoose');
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const app = express();


mongoose.Promise = global.Promise;
const option = {
    socketTimeoutMS: 0,
    connectTimeoutMS: 0,
    useNewUrlParser: true 
    // useMongoClient: true
};
mongoose.connect("mongodb://dbU1:123456789a@ds129776.mlab.com:29776/gq-fe", option, function (err) {
    if (err)
        console.log(err);
    else
        console.log('connected..')
});

app.use('*', cors());

const userSchema = require('./graphql/index').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}));

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at port 4000');
});