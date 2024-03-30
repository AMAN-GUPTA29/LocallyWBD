const mongoose=require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,

    };
    try{
        mongoose.connect(process.env.DB,connectionParams);
        console.log("connnected to database");
    }catch(error){

        console.log(error);
        console.log("could not connect to database");

    }
}