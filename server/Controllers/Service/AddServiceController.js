const {Services} = require('./../../Models/service.js')
const {validate} = require('./../../Utils/addServiceValidator.js')


async function AddService(req, res) {
   
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send({message:error.details});
    }

    await new Services({
        ...req.body,
        pointer:req.user._id
    }).save()
    res.status(201).send({message:"Service created Succesfully"})

}

module.exports = {AddService}