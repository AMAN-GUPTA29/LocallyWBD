const router = require("express").Router();
const{Seller}=require("../Models/seller");
const{BlockedSeller}=require("../Models/blockedseller")


async function sellerDeleteController (req, res){
    try{
       
        
        console.log(req.body)

        const status=await BlockedSeller.findOne({email:req.body.email});
        
        // console.log(req.body)
        if(status){
            return res.status(409).send({message:"User already blocked"})
        }



        try{
        const deleteseller=await Seller.updateOne({email:req.body.email},{ $set: {status:"blocked"} });
        console.log(deleteseller);
        }
        catch(e)
        {
            console.log("user dont exist")
        }

        
        await new BlockedSeller({...req.body}).save();

        
        res.status(201).send({message:"Seller Blocked"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {sellerDeleteController}