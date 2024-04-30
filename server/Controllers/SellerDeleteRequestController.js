const router = require("express").Router();
const { Requests } = require('./../Models/request')
const {History}=require('./../Models/history')

async function SellerDeleteRequestController (req, res) {
    try{
        const { id } = req.params;
        const seller_id = req.user._id
        const data1=await Requests.findOne({sellerid:seller_id,_id:id,accepted:false})

        var instance=
        {
            sellerid:data1.sellerid,
            customerid:data1.customerid,
            serviceid:data1.serviceid
        }

        console.log("grg")

        await History(instance).save();
        await Chat(instance).save();
        const data=await Requests.deleteOne({sellerid:seller_id,_id:id,accepted:false})
        console.log(data)
        res.status(201).send({ data:data ,message: "Deleted request" });
        }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internl server error" })
        }       
}

module.exports = { SellerDeleteRequestController}