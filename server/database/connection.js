const mongoose =require("mongoose");

const DB ="mongodb+srv://eushaahmed08:E7YpyrTWCbQZ2SGR@cluster0.2iysmom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("DB is connected");

}).catch(()=>{
    console.log("Error while calling when Database Connected",err);

})