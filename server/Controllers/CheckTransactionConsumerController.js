const router = require("express").Router();
const { Transaction } = require('./../Models/transaction')
// const { Services } = require('./../Models/service')


async function TransactionConsumerController (req, res) {
    try{

        console.log(req.user._id)
       const data = await Transaction.find({customerid:req.user._id}).populate('sellerid').populate('customerid').populate('serviceid')

        

        res.status(201).send({data:data,message: "Accepted saved" });
       
        
    }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internl server error" })
        }       
}

module.exports = { TransactionConsumerController}