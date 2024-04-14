const router = require("express").Router();
const{Seller}=require("../Models/seller");
const{BlockedSeller}=require("../Models/blockedseller")
const bcrypt=require("bcrypt");

async function sellerDeleteController (req, res){
    try{
       
        
        console.log(req.body)
        try{
        const deleteseller=await Seller.deleteOne({email:req.body.email});
        console.log(deleteseller);
        }
        catch(e)
        {
            console.log("user dont exist")
        }

        
        await new BlockedSeller({...req.body}).save();

        
        res.status(201).send({message:"Seller Deleted"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {sellerDeleteController}