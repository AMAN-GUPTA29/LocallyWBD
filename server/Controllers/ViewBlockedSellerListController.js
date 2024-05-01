const router = require("express").Router();
const {BlockedSeller} = require("../Models/blockedseller");

// const { validate } = require("../Utils/sellerLoginValidation");




async function sellerBlockedListController (req, res){
    try {
        		
        		// if (error){
        		// 	return res.status(400).send({ message: error.details[0].message });
        		// }
                
        		const seller = await BlockedSeller.find({});
        	
        		// console.log(validPassword);
                
        		// if (!validPassword){
                    
        		// 	return res.status(401).send({ message: "Invalid Email or Password" });
        		// }
                
            
        
        	
                
        		res.status(200).send({ data: seller, message: "seller blocked list" });
        	} catch (error) {
        		console.log(error)
        		res.status(500).send({ message: "Internal Server Error" });
        	}
}

module.exports = {sellerBlockedListController}