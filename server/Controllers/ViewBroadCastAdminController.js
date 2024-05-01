const router = require("express").Router();
const{Broadcast}=require("../Models/broadcast");
const { redisClient } = require("../Utils/cache");

// const {BlockedSeller} = require("../Models/blockedseller");

// const { validate } = require("../Utils/adminLoginValidation");




async function viewBroadcastController (req, res){
    try {
                

		redisClient.get("broadcastadmin", async (err, cachedData) => {
            if (err) throw err;
      
        if (cachedData) {
          return res.json(JSON.parse(cachedData));
        } else {
    
        
		const broadcastmess = await Broadcast.find({});
          redisClient.setex("broadcastadmin", 3600, JSON.stringify({data:broadcastmess,message:"Bradcast admin"}));
          
          return res.status(201).send({ data: broadcastmess ,message: "Successful" });
      }})
        
    	


            
        		
    	} catch (error) 
		{
        		console.log(error)
        		res.status(500).send({ message: "Internal Server Error" });
        }
}

module.exports = {viewBroadcastController}