require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const app = express();
const router  = require('./routes/')
var path = require('path');

app.use("/", router);

app.get("/client",(req, res, next)=>{
    res.sendFile(path.join(__dirname + "/../client/index.html"))
});
// Connection String
// console.log(process.env.MONGODB_URI)

//establish connection to database
mongoose.connect(
    process.env.MONGODB_URI,
    { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);


app.listen(process.env.PORT || 3000, () =>
console.log('The app listening on port 3000!'),
);