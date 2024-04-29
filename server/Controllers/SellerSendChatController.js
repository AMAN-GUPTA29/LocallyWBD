
const router = require("express").Router();
const{Chat}=require("../Models/chat");
const{ChatSet}=require("../Models/chatset");
const bcrypt=require("bcrypt");
// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function sellerSendChat (req, res){
    try{
       
        console.log(req.body)
        console.log(req.user._id)
       
        const pointer=await ChatSet.findOne({sellerid:req.user._id,customerid:req.body.customerid})
        console.log(pointer)
        let instance = {
            pointer:pointer._id,
            message:req.body.message,
            sender:"seller"
        }

        await Chat(instance).save();
        res.status(201).send({message:"chat send consumer"})
        
       
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {sellerSendChat}