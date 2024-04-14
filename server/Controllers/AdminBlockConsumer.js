const router = require("express").Router();
const{Consumer}=require("../Models/consumer");
const{BlockedConsumer}=require("../Models/blockedconsumer")
const bcrypt=require("bcrypt");

async function consumerDeleteController (req, res){
    try{
       
        
        console.log(req.body)
        try{
        const deleteconsumer=await Consumer.deleteOne({email:req.body.email});
        console.log(deleteconsumer);
        }
        catch(e)
        {
            console.log(e)
        }

        
        await new BlockedConsumer({...req.body}).save();

        
        res.status(201).send({message:"Consumer Deleted"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {consumerDeleteController}