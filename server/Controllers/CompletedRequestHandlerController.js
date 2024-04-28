const { assert } = require('joi')
const { Requests } = require('./../Models/request')
const { History } =require('./../Models/history')
const {Seller}=require('./../Models/seller')
const {Services}=require('./../Models/service')

// /api/v1/request/completed/:id

async function CompletedRequestHandlerController (req, res) {
    try{
        const { id } = req.params // request-id
        if ( !id ) throw Error
        let request_obj = await Requests.findOne({ 
            _id:id, 
            customerid: req.user._id
        })

        if ( !request_obj ) return res.status(202).send({ message: "The request does not exist under current user" })
        if ( !request_obj.accepted ) return res.status(202).send({ message: "The request is not accepted by seller yet" })

        let instance = {
            customerid: req.user._id,
            sellerid: request_obj.sellerid,
            serviceid: request_obj.serviceid,
        }
        var price=(await Services.findOne({_id:request_obj.serviceid})).charge
        // // var premoney=(await Seller.findOne({_id:request_obj.sellerid})).income
        // var finalmoney=premoney;
        await Seller.updateOne({ _id: request_obj.sellerid }, { $inc: { income: price } })

        await new History(instance).save()
        await Requests.deleteOne({ _id:id })

        res.status(201).send({ message: "History Created && Deleted from request" });
    }catch (e){
        console.log(e)
        res.status(500).send({ message: "internl server error" })
    }
}

module.exports = { CompletedRequestHandlerController }