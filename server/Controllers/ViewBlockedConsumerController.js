const router = require("express").Router();
const {BlockedConsumer} = require("../Models/blockedconsumer");
const bcrypt = require("bcrypt");
// const { validate } = require("../Utils/sellerLoginValidation");




async function consumerBlockedListController (req, res){
    try {
        		
        		// if (error){
        		// 	return res.status(400).send({ message: error.details[0].message });
        		// }
                
        		const consumer = await BlockedConsumer.find({});
        	
        		// console.log(validPassword);
                
        		// if (!validPassword){
                    
        		// 	return res.status(401).send({ message: "Invalid Email or Password" });
        		// }
                
            
        
        	
                
        		res.status(200).send({ data: consumer, message: "consumer blocked list" });
        	} catch (error) {
        		console.log(error)
        		res.status(500).send({ message: "Internal Server Error" });
        	}
}

module.exports = {consumerBlockedListController}