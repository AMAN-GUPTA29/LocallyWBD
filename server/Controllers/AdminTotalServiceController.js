const router = require("express").Router();
const{Services}=require("../Models/service");
const bcrypt=require("bcryptjs");

async function serviceLength (req, res){
    try{
       
        
        
        const serlength=(await Services.find({})).length;
        
        
        // if(consmumerlist){
        //     return res.status(409).send({message:"Consumer Don't exist exist"})
        // }

        
        res.status(201).send({data:serlength,message:"All service"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {serviceLength}