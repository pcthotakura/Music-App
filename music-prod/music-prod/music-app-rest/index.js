
const express = require("express");;
const app=express();
var bodyParser = require('body-parser')
// const cors = require('cors'); 
// const fileupload=require("express-fileupload");
// const userRouter=require("./src/Routes/user.router");
// const DataConstants = require("./src/Utils/constants.service");
const compression = require("compression");
const UserRouter = require("./src/Routes/user.router");
//const morgan = require("morgan");
//DataConstants.parentDir=__dirname;
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
app.use(compression())
// app.use(fileupload());
// app.use(morgan('combined'))
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // var timer = setInterval(function () {
    // res.write('flushdata')
    //     res.flush()
    //   }, 2000)
    //   res.on('close', function () {
    //     clearInterval(timer)
    //   })
    next();
});
//app.use("/user",userRouter)
app.use("/user",UserRouter)

app.listen(8080,()=>{
 console.log("app started...")
})
module.exports=app;