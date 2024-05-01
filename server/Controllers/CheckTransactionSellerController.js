const router = require("express").Router();
const { Transaction } = require('./../Models/transaction')
// const { Services } = require('./../Models/service')


async function TransactionSellerController (req, res) {
    try{

       const data = await Transaction.find({sellerid:req.user._id}).populate('sellerid').populate('customerid').populate('serviceid')

        

        res.status(201).send({data:data,message: "Accepted saved" });
       
        
    }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internl server error" })
        }       
}

module.exports = { TransactionSellerController}