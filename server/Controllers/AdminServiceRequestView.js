const router = require("express").Router();
const{Requests}=require("../Models/request");
const bcrypt=require("bcryptjs");

async function adminRequestListController (req, res){
    try{
       
        
        
        const servicelist=await Requests.find({}).populate("serviceid").populate("sellerid").populate("customerid");
        

        
        res.status(201).send({data:servicelist,message:"All service"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {adminRequestListController}