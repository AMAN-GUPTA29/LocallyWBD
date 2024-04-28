const router = require("express").Router();
const {BlockedConsumer} = require("../Models/blockedconsumer");
const bcrypt = require("bcrypt");
const { validate } = require("../Utils/adminLoginValidation");




async function unblockConsumerController (req, res){
    try {
                
        		const admin = await BlockedConsumer.deleteOne({ email: req.body.email });
        		
                
                
        		res.status(200).send({ message: "Unblocked successfully" });
        	} catch (error) {
        		console.log(error)
        		res.status(500).send({ message: "Internal Server Error" });
        	}
}

module.exports = {unblockConsumerController}