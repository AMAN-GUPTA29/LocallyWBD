const router = require("express").Router();
const{History}=require("../Models/history");


async function checkConsumerHistory (req, res){
    try{
       
        
        
        const consumerHistory=await History.find({customerid:req.user._id}).populate('serviceid').populate('sellerid');
        
        
        // if(consmumerlist){
        //     return res.status(409).send({message:"Consumer Don't exist exist"})
        // }

        
        res.status(201).send({data:consumerHistory,message:"All consumer History"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {checkConsumerHistory}