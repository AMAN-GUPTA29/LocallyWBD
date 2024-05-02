const {Services} = require("../Models/service")


async function ConsumerFilterController(req, res) {
    try {
        console.log(req.params)
        Services.where("tag").equals(req.params.filter_details).populate('pointer').then(doc => {
            console.log(doc)
            res.send( {data:doc,message:"filtered"} );
        })

    }catch (e) {
            console.log(e)
            res.status(500).send({ message: "internal server error" })
    }
    }
    module.exports = { ConsumerFilterController }
