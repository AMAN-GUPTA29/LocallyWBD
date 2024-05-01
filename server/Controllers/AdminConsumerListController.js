const router = require("express").Router();
const{Consumer}=require("../Models/consumer");

const { redisClient } = require("../Utils/cache");

async function adminConsumerListController (req, res){
    try{


         
        console.log(req.body)
        redisClient.get("allconsumer", async (err, cachedData) => {
            if (err) throw err;
      
        if (cachedData) {
          return res.json(JSON.parse(cachedData));
        } else {
    
        
          const consmumerlist=await Consumer.find({});
          redisClient.setex("allconsumer", 3600, JSON.stringify({data:consmumerlist,message:"All consumer"}));
          
          return res.status(201).send({data:consmumerlist,message:"All seller"})
      }})
        
       
        
        
        
        
        
        // if(consmumerlist){
        //     return res.status(409).send({message:"Consumer Don't exist exist"})
        // }

        
        // res.status(201).send({data:consmumerlist,message:"All consumers"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {adminConsumerListController}