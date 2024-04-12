const router = require("express").Router();
const{Seller}=require("../Models/seller");
const bcrypt=require("bcrypt");

async function adminSellerListController (req, res){
    try{
       
        
        console.log(req.body)
        const sellerlist=await Seller.find({});
        
        
        // if(consmumerlist){
        //     return res.status(409).send({message:"Consumer Don't exist exist"})
        // }

        
        res.status(201).send({data:sellerlist,message:"All seller"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {adminSellerListController}