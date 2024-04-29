const router = require("express").Router();
const{History}=require("../Models/history");
const bcrypt=require("bcrypt");

async function checkSellerHistory (req, res){
    try{
       
        
        
        const sellerHistory=await History.find({sellerid:req.user._id}).populate('customerid').populate('serviceid');
        
        
        // if(consmumerlist){
        //     return res.status(409).send({message:"Consumer Don't exist exist"})
        // }

        
        res.status(201).send({data:sellerHistory,message:"All seller History"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {checkSellerHistory}