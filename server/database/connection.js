const mongoose =require("mongoose");

const DB =process.env.DATABASE;

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("DB is connected");

}).catch(()=>{
    console.log("Error while calling when Database Connected",err);

})