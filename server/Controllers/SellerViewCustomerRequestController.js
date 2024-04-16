const router = require("express").Router();
const { Requests } = require('./../Models/request')



async function SellerViewCustomerRequestController (req, res) {
    try{
        const seller_id = req.user._id
        
        console.log(seller_id)
        const data=   await Requests.find({sellerid:seller_id})
        res.status(201).send({ data:data ,message: "json for request sent" });
        }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internal server error" })
        }       
}

module.exports = { SellerViewCustomerRequestController }