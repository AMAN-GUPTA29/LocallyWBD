
const router = require("express").Router();
const{Chat}=require("../Models/chat");
const{ChatSet}=require("../Models/chatset");
const bcrypt=require("bcrypt");
const { validate } = require("../Utils/TokenValidate");
// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function sellerViewChatTile (req, res){
    try{
       
        const data= await ChatSet.find({sellerid:req.user._id}).populate("customerid");

        console.log(data)
        
        res.status(201).send({message:"founduser",data:data})  ;  
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {sellerViewChatTile}