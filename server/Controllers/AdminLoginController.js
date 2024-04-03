const router = require("express").Router();
const {Admin} = require("../Models/admin");
const bcrypt = require("bcrypt");
const { validate } = require("../Utils/adminLoginValidation");




async function adminloginController (req, res){
    try {
        		const { error } = validate(req.body);
        		if (error){
        			return res.status(400).send({ message: error.details[0].message });
        		}
                
        		const admin = await Admin.findOne({ email: req.body.email });
        		if (!admin){
        			return res.status(401).send({ message: "Invalid Email or Password" });
        		}
                
        		const validPassword = await bcrypt.compare(
        			req.body.password,
        			admin.password
        		);
        		console.log(validPassword);
                
        		if (!validPassword){
                    
        			return res.status(401).send({ message: "Invalid Email or Password" });
        		}
                
            
        
        		const token = await admin.genrateAuthToken();
                
        		res.status(200).send({ data: token, message: "logged in successfully" });
        	} catch (error) {
        		console.log(error)
        		res.status(500).send({ message: "Internal Server Error" });
        	}
}

module.exports = {adminloginController}