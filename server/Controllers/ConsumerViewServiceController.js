
const { Services } = require("../Models/service");
// const bcrypt=require("bcrypt");
// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function ConsumerViewServiceController(req, res) {
    try {
        const data = await Services.find({}).populate('pointer')
        res.status(201).send({ message: "displayed all availaible services", data: data});
    }catch (e) {
            console.log(e)
            res.status(500).send({ message: "internl server error" })
    }
    }


module.exports = { ConsumerViewServiceController }