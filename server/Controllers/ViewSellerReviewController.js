
const router = require("express").Router();
const{Seller}=require("../Models/seller");
const{Review}=require("../Models/review")
const bcrypt=require("bcrypt");
// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function sellerReviewController (req, res){
    try{
       
        console.log(req.user.email)
   
        
        const id = (await Seller.findOne({email:req.user.email}))._id;
        console.log(id);
        const reviewdata=await Review.find({sellerid:id})
        console.log(reviewdata)
        

        
        res.status(201).send({message:"foundreview",data:reviewdata})  ;  
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {sellerReviewController}