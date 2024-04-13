const {Services} = require('./../../Models/service.js')
const {validate} = require('./../../Utils/addServiceValidator.js')


async function AddService(req, res) {
    const selleruser = req.user
    console.log(selleruser)
    const error = validate(req.body)
    if (error) {
        return res.status(400).send({message:error.details[0].message});
    }

    // await new Services({
    //     ...req.body,

    // }).save()
    res.status(201).send({message:"Service created Succesfully"})

}

module.exports = {AddService}