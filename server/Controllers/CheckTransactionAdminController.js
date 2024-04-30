const router = require("express").Router();
const { Transaction } = require('./../Models/transaction')
// const { Services } = require('./../Models/service')


async function TransactionAdminController (req, res) {
    try{

       const data = await Transaction.find()

        

        res.status(201).send({data:data,message: "Accepted saved" });
       
        
    }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internl server error" })
        }       
}

module.exports = { TransactionAdminController}