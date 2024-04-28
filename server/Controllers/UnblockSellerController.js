const router = require("express").Router();
const{Seller}=require("../Models/seller");

const {BlockedSeller} = require("../Models/blockedseller");
const bcrypt = require("bcrypt");
// const { validate } = require("../Utils/adminLoginValidation");




async function unblockSellerController (req, res){
    try {
                
        		const admin = await BlockedSeller.deleteOne({ email: req.body.email });


                try{
                    const deleteseller=await Seller.updateOne({email:req.body.email},{ $set: {status:"Unblock"} });
                    console.log(deleteseller);
                    }
                    catch(e)
                    {
                        console.log("user dont exist")
                    }
        		
                
                
        		res.status(200).send({ message: "Unblocked successfully" });
        	} catch (error) {
        		console.log(error)
        		res.status(500).send({ message: "Internal Server Error" });
        	}
}

module.exports = {unblockSellerController}