const router = require("express").Router();
const {Consumer } = require("../Models/consumer");
const bcrypt = require("bcrypt");
const { validate } = require("../Utils/loginValidation");




async function consumerloginController (req, res){
    try {
        		const { error } = validate(req.body);
        		if (error){
        			return res.status(400).send({ message: error.details[0].message });
        		}
                
        		const consumer = await Consumer.findOne({ email: req.body.email });
        		if (!consumer){
        			return res.status(401).send({ message: "Invalid Email or Password" });
        		}
                
        		const validPassword = await bcrypt.compare(
        			req.body.password,
        			consumer.password
        		);
        		console.log(validPassword);
                
        		if (!validPassword){
                    
        			return res.status(401).send({ message: "Invalid Email or Password" });
        		}
                
            
        
        		const token = await consumer.genrateAuthToken();
                
        		res.status(200).send({ data: token, message: "logged in successfully" });
        	} catch (error) {
        		console.log(error)
        		res.status(500).send({ message: "Internal Server Error" });
        	}
}

module.exports = {consumerloginController}