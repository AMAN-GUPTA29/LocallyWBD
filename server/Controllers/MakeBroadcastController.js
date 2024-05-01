const router = require("express").Router();
const{Broadcast}=require("../Models/broadcast");

// const {BlockedSeller} = require("../Models/blockedseller");

// const { validate } = require("../Utils/adminLoginValidation");

async function makeBroadcastController (req, res){
    try {
        await new Broadcast({...req.body}).save();
        res.status(201).send({ message: "Braodcasted" });		
    } catch (error) {
    	console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
}

module.exports = {makeBroadcastController}