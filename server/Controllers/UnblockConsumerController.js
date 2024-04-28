const router = require("express").Router();
const {BlockedConsumer} = require("../Models/blockedconsumer");
const{Consumer}=require("../Models/consumer");
const bcrypt = require("bcrypt");
const { validate } = require("../Utils/adminLoginValidation");




async function unblockConsumerController (req, res){
    try {
                
        		const admin = await BlockedConsumer.deleteOne({ email: req.body.email });

                try{
         
                    const deleteconsumer=await Consumer.updateOne({email:req.body.email},{ $set: {status:"Unblocked"} });
                    // console.log(deleteconsumer);
                    }
                    catch(e)
                    {
                        console.log(e)
                    }
        		
                
                
        		res.status(200).send({ message: "Unblocked successfully" });
        	} catch (error) {
        		console.log(error)
        		res.status(500).send({ message: "Internal Server Error" });
        	}
}

module.exports = {unblockConsumerController}