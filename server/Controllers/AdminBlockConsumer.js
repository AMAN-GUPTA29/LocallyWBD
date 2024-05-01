const router = require("express").Router();
const{Consumer}=require("../Models/consumer");
const{BlockedConsumer}=require("../Models/blockedconsumer")


async function consumerDeleteController (req, res){
    try{
       
        console.log("tj")
        console.log(req.body)

        const status=await BlockedConsumer.findOne({email:req.body.email});
        
        // console.log(req.body)
        if(status){
            return res.status(409).send({message:"User already blocked"})
        }
        try{
         
        const deleteconsumer=await Consumer.updateOne({email:req.body.email},{ $set: {status:"blocked"} });
        // console.log(deleteconsumer);
        }
        catch(e)
        {
            console.log(e)
        }

        
        await new BlockedConsumer({...req.body}).save();

        
        res.status(201).send({message:"Consumer Blocked"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {consumerDeleteController}