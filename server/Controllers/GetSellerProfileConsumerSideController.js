
const router = require("express").Router();
const{Seller}=require("../Models/seller");

// const { validate } = require("../Utils/TokenValidate");
// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function sellerProfilefromConsumer (req, res){
    try{
       
        
        // console.log("here7")
        // console.log(req.body)
        // console.log(req.user.email)


        const user=await Seller.findOne({_id:req.body.pointer});
        // console.log(user)
        // if(!user.acknowledged)
        // {
        //     res.status(500).send({message:"User not found error"});  
        // }
        // print(req.body);
        // const consumer=await Consumer.findOne({email:req.body.email});
        
        // const consumer=await Consumer.updateOne({email:req.user.email});
        // const{tokn}=checktokenMiddleware(req,res)
        // console.log("verified")
        // console.log(req.user.email);

        
        res.status(201).send({data:user,message:"Seller Info"})  ;  
    }catch(e){
        // console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {sellerProfilefromConsumer}