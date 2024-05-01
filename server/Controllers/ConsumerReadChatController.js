
const router = require("express").Router();
const{Chat}=require("../Models/chat");
const{ChatSet}=require("../Models/chatset");
const bcrypt=require("bcryptjs");
// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function consumerViewChat (req, res){
    try{
       
        console.log(req.body)
        console.log(req.user._id)
       
        const pointer=await ChatSet.findOne({customerid:req.user._id,sellerid:req.body.sellerid})
        console.log(pointer)
        const chats=await Chat.find({pointer:pointer._id})
        
        res.status(201).send({message:"foundchat",data:chats})  ;  
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {consumerViewChat}