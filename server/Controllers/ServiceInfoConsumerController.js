const router = require("express").Router();
const { Services } = require('./../Models/service')



async function sellerServiceDataOptedByConsumer (req, res) {
    try{
        
        
        const data= await Services.findOne({_id:req.body._id});
        res.status(201).send({ data: data ,message: "Service Data" });
        }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internal server error" })
        }       
}

module.exports = { sellerServiceDataOptedByConsumer }