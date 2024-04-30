const router = require("express").Router();
const { Transaction } = require('./../Models/transaction')
// const { Services } = require('./../Models/service')


async function TransactionController (req, res) {
    try{

        // console.log(hii);

        let instance={
            serviceid:req.body.serviceid,
            sellerid:req.body.sellerid,
            customerid:req.user._id,
            charge:req.body.charge,
            transactionid:req.body.transactionid,
        }

        await Transaction(instance).save();

        res.status(201).send({message: "Accepted saved" });
       
        
    }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internl server error" })
        }       
}

module.exports = { TransactionController}