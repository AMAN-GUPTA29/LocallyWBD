
const router = require("express").Router();
const{Chat}=require("../Models/chat");
const{ChatSet}=require("../Models/chatset");

// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function sellerViewChat (req, res){
    try{
       
        console.log(req.body)
        console.log(req.user._id)
       
        const pointer=await ChatSet.findOne({sellerid:req.user._id,customerid:req.body.customerid})
        console.log(pointer)
        const chats=await Chat.find({pointer:pointer._id})
        
        res.status(201).send({message:"foundchat",data:chats})  ;  
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {sellerViewChat}