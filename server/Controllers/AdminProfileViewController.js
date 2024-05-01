
const router = require("express").Router();
const{Admin}=require("../Models/admin");
const bcrypt=require("bcryptjs");



async function adminProfileViewController (req, res){
    try{
       
       
        console.log("here7")
     
        
       
        

        // const{tokn}=checktokenMiddleware(req,res)
   
        console.log("verified")
        console.log(req.user.email);

        
        res.status(201).send({message:"founduser",data:req.user})  ;  
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {adminProfileViewController}