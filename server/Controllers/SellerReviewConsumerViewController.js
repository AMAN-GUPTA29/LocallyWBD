const router = require("express").Router();
const { Review } = require('./../Models/review')



async function SellerReviewConsumerView (req, res) {
    try{
        
        
        const data= await Review.find({sellerid:req.body._id});
        res.status(201).send({ data: data ,message: "Seller Review" });
        }
        catch (e){
            console.log(e)
            res.status(500).send({ message: "internal server error" })
        }       
}

module.exports = { SellerReviewConsumerView }