const router = require("express").Router();
const{Seller}=require("../Models/seller");
const bcrypt=require("bcryptjs");
const { redisClient } = require("../Utils/cache");

async function adminSellerListController (req, res){
    try{
       
        
        console.log(req.body)
        redisClient.get("allsellers", async (err, cachedData) => {
            if (err) throw err;
      
        if (cachedData) {
          return res.json(JSON.parse(cachedData));
        } else {
    
        
          const sellerlist=await Seller.find({});
          redisClient.setex("allsellers", 3600, JSON.stringify({data:sellerlist,message:"All seller"}));
          
          return res.status(201).send({data:sellerlist,message:"All seller"})
      }})
        
        
        // if(consmumerlist){
        //     return res.status(409).send({message:"Consumer Don't exist exist"})
        // }

        
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {adminSellerListController}