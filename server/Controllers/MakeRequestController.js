const router = require("express").Router();
const { Requests } = require('./../Models/request')
const { Services } = require('./../Models/service')

async function MakeRequestController (req, res) {
    console.log("vjn")
    try{
        const { id } = req.params // service-id
        console.log(id)
        console.log("ht")
        if ( !id ) throw Error
        console.log("htsdgv")
        const customer_id = req.user._id
        console.log(id)
        const service_obj = await Services.findOne({ _id:id }) 
        console.log("gr")// pointer == seller._id
        const seller_id = service_obj.pointer;
        

        let instance = {
            sellerid: seller_id,
            serviceid: id,
            customerid: customer_id,
            accepted: false
        }

        await new Requests(instance).save()
        res.status(201).send({ message: "Request Sent" });
    }catch (e){
        console.log(e)
        res.status(500).send({ message: "internl server error" })
    }
}

module.exports = { MakeRequestController }