const router = require("express").Router();
const{Broadcast}=require("../Models/broadcast");

// const {BlockedSeller} = require("../Models/blockedseller");
const bcrypt = require("bcrypt");
// const { validate } = require("../Utils/adminLoginValidation");




async function viewBroadcastController (req, res){
    try {
                
        	
        const broadcastmess = await Broadcast.find({$or:[{pointer:"consumer"},{pointer:"all"}] });


                res.status(201).send({ data: broadcastmess ,message: "Successful" });
        		
        	} catch (error) {
        		console.log(error)
        		res.status(500).send({ message: "Internal Server Error" });
        	}
}

module.exports = {viewBroadcastController}