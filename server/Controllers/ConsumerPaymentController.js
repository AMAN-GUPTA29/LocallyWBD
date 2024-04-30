
const router = require("express").Router();
const { History } =require('./../Models/history')
const{Requests}=require("../Models/request");
const bcrypt=require("bcrypt");
const Razorpay = require("razorpay");
const { date } = require("joi");



async function consumerPaymentController (req, res){
    try{
        // console.log("skjjks")

        // let request_obj = await Requests.findOne({ 
        //     _id:req.body._id, 
        //     customerid: req.user._id
        // })


        // let instance = {
        //     customerid: req.user._id,
        //     sellerid: request_obj.sellerid,
        //     serviceid: request_obj.serviceid,
        //     datecompleted: Date()
        // }
        // await new History(instance).save()
        // await Requests.deleteOne({_id:req.body._id}) 
        // res.status(201).send({message:"Request Deleted and saved to history "})

       

        const razorpay=new Razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_KEY_SECRET
        })

        const options=req.body;

        const order=await razorpay.orders.create(options);
        
        if(!order)
        {
            return res.status(400).send('order not created')
        }

         res.status(201).send({date:order,message:"succesful"})
        
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {consumerPaymentController }