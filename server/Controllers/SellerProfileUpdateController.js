
const router = require("express").Router();
const{Seller}=require("../Models/seller");
const bcrypt=require("bcrypt");




async function sellerProfileUpdateController (req, res){
    try{
       
        
        console.log("here7")
        console.log(req.body)
        console.log(req.user.email)


        const user=await Seller.updateOne({email:req.user.email},{ $set: req.body });
        console.log(user)
        if(!user.acknowledged)
        {
            res.status(500).send({message:"User not found error"});  
        }
        

        
        res.status(201).send({message:"Updated"})  ;  
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {sellerProfileUpdateController}