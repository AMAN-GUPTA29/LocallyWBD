const router = require("express").Router();
const { Requests } = require('./../Models/request')

async function SellerAcceptedRequestController (req, res) {
    try{
        const { id } = req.params;
        const seller_id = req.user._id
        const data=   await Requests.updateOne({sellerid:seller_id,_id:id},{$set:{accepted:true}})
        console.log(data)
        res.status(201).send({ data:data ,message: "Accepted request" });
        }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internl server error" })
        }       
}

module.exports = { SellerAcceptedRequestController}