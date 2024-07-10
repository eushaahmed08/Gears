const express = require("express");
const dotenv =require("dotenv");
const app = express();
dotenv.config({path:"./config.env"});

const port = process.env.PORT;



app.listen(port,()=>{

    console.log(`server is listening to the port http://localhost:${port}`)
});