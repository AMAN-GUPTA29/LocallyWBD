const router = require("express").Router();
const { Requests } = require('./../Models/request')
const { Services } = require('./../Models/service')


async function PendingRequestController (req, res) {
    try{
        const customer_id = req.user._id
        const data=   await Requests.find({customerid:customer_id,accepted:false}).populate('customerid').populate('serviceid').populate('sellerid')
        res.status(201).send({ data:data ,message: "Request Sent" });
        }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internl server error" })
        }       
}

module.exports = { PendingRequestController }