const router = require("express").Router();
const {Seller} = require("../Models/seller");
const bcrypt = require("bcrypt");
const { validate } = require("../Utils/sellerLoginValidation");




async function sellerloginController (req, res){
    try {
        		const { error } = validate(req.body);
        		if (error){
        			return res.status(400).send({ message: error.details[0].message });
        		}
                
        		const seller = await Seller.findOne({ email: req.body.email });
        		if (!seller){
        			return res.status(401).send({ message: "Invalid Email or Password" });
        		}
                
        		const validPassword = await bcrypt.compare(
        			req.body.password,
        			seller.password
        		);
        		console.log(validPassword);
                
        		if (!validPassword){
                    
        			return res.status(401).send({ message: "Invalid Email or Password" });
        		}
                
            
        
        		const token = await seller.genrateAuthToken();
                
        		res.status(200).send({ data: token, message: "logged in successfully" });
        	} catch (error) {
        		console.log(error)
        		res.status(500).send({ message: "Internal Server Error" });
        	}
}

module.exports = {sellerloginController}