/*
* This takes MongoID of service rather than token
* Customer and Admin can get details if they have service ID
* Unristriceted Access
*/


const { Seller } = require("./../Models/seller");
const { Services } = require('./../Models/service')

async function GetService_SellerDetailsController(req, res) {
    try {
        const { id } = req.params
        if ( !id ) throw Error
        let out = await Services.where({ _id:id }).populate("pointer")
        res.status(201).send({ message: "Sent Seller-Service details", data: out });
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: "internl server error" })
    }
}


module.exports = { GetService_SellerDetailsController }