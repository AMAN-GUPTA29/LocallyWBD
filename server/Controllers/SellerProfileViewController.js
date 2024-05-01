
const router = require("express").Router();
const{Seller}=require("../Models/seller");

// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function sellerProfileViewController (req, res){
    try{
       
       
        console.log("here7")
        // console.log(error)
        
       
        

        // const{tokn}=checktokenMiddleware(req,res)
   
        console.log("verified")
        // console.log(req.user.email);

        console.log(req.user);

        
        res.status(201).send({message:"founduser",data:req.user})  ;  
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {sellerProfileViewController}