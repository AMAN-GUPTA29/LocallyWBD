const router = require("express").Router();
const { Requests } = require('./../Models/request')

async function AcceptedRequestController (req, res) {
    try{
        const customer_id = req.user._id
        const data=   await Requests.find({customerid:customer_id,accepted:true})
        console.log(data)
        res.status(201).send({ data:data ,message: "Accepted request" });
        }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internl server error" })
        }       
}

module.exports = { AcceptedRequestController}