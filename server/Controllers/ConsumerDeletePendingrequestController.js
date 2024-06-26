
const router = require("express").Router();
const { History } =require('./../Models/history')
const{Requests}=require("../Models/request");




async function pendingServiceDeleteRequest (req, res){
    try{
        console.log("skjjks")

        let request_obj = await Requests.findOne({ 
            _id:req.body._id, 
            customerid: req.user._id
        })


        let instance = {
            customerid: req.user._id,
            sellerid: request_obj.sellerid,
            serviceid: request_obj.serviceid,
            datecompleted: Date()
        }
        await new History(instance).save()
        await Requests.deleteOne({_id:req.body._id}) 
        res.status(201).send({message:"Request Deleted and saved to history "})
    
        
        
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {pendingServiceDeleteRequest }