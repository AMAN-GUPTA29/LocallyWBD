
const router = require("express").Router();
const{Chat}=require("../Models/chat");
const{ChatSet}=require("../Models/chatset");
const bcrypt=require("bcrypt");



async function consumerSendMessage (req, res){
    try{

        console.log("dsbhf")
       
        const data = await ChatSet.findOne({customerid:req.user._id,sellerid:req.body.sellerid})
        console.log("dsbhf22")
        if(!data)
        {
            let instance = {
                customerid: req.user._id,
                sellerid: req.body.sellerid,
            }

            await new ChatSet(instance).save();
        }
        console.log("dsbhf2233")
        const forpointer = await ChatSet.find({customerid:req.user._id,sellerid:req.body.sellerid})
        console.log(forpointer)
        
        let instance = {
            pointer:forpointer._id,
            message:req.body.message
        }

        console.log(instance)
        await Chat(instance).save();
        res.status(201).send({message:"chat send consumer"})
    
        
        
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {consumerSendMessage}