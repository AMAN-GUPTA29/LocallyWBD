const router = require("express").Router();
const { Requests } = require('./../Models/request')

async function SellerDeleteRequestController (req, res) {
    try{
        const { id } = req.params;
        const seller_id = req.user._id
        const data=   await Requests.deleteOne({sellerid:seller_id,_id:id,accepted:false})
        console.log(data)
        res.status(201).send({ data:data ,message: "Deleted request" });
        }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internl server error" })
        }       
}

module.exports = { SellerDeleteRequestController}