
const router = require("express").Router();
const{Requests}=require("../Models/request");
const bcrypt=require("bcrypt");



async function pendingServiceDeleteRequest (req, res){
    try{
       
       
        
        await Requests.deleteOne({_id:req.body._id}) 
        res.status(201).send({message:"Request Deleted "})
    
        
        
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {pendingServiceDeleteRequest }