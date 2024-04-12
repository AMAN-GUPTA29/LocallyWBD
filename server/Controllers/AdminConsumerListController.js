const router = require("express").Router();
const{Consumer}=require("../Models/consumer");
const bcrypt=require("bcrypt");

async function adminConsumerListController (req, res){
    try{
       
        
        console.log(req.body)
        const consmumerlist=await Consumer.find({});
        
        
        // if(consmumerlist){
        //     return res.status(409).send({message:"Consumer Don't exist exist"})
        // }

        
        res.status(201).send({data:consmumerlist,message:"All consumers"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {adminConsumerListController}