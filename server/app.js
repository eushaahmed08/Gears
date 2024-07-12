const express = require("express");
const dotenv =require("dotenv");
const app = express();
dotenv.config({path:"./config.env"});
app.use(express.json());
app.use(require("./routes/route"));
require("./database/connection");

const port = process.env.PORT;



app.listen(port,()=>{

    console.log(`server is listening to the port http://localhost:${port}`)
});