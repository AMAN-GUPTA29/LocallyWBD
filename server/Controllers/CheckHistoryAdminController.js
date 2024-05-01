const router = require("express").Router();
const{History}=require("../Models/history");


async function checkAdminHistory (req, res){
    try{
       
        
        
        const adminHistory=await History.find({}).populate('serviceid').populate('sellerid').populate('customerid');
        
        
        // if(consmumerlist){
        //     return res.status(409).send({message:"Consumer Don't exist exist"})
        // }

        
        res.status(201).send({data:adminHistory,message:"All admin History"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {checkAdminHistory}