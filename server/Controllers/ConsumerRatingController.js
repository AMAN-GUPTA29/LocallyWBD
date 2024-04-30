
const router = require("express").Router();
const{Review}=require("../Models/review");
const bcrypt=require("bcrypt");



async function consumerGivenSellerReview (req, res){
    try{
       
       
        
        await new Review({...req.body,consumername:req.user.name}).save();
        res.status(201).send({message:"Review saved Succesfully"})
    
        
        
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {consumerGivenSellerReview}