
const {Services} = require('./../../Models/service.js')
async function ViewService(req, res) {
    const selleruser = req.user
    console.log(selleruser)


    Services.find({ pointer: req.user._id })
    .then((doc) => {
      res.status(201).send( { 
        data: doc,
        message:"json sent for service"
     });
      console.log("json sent for service")
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({message:err.details[0].message});
    });
}





//     const error = validate(req.body)
//     if (error) {
//         return res.status(400).send({message:error.details[0].message});
//     }

//     // await new Services({
//     //     ...req.body,

//     // }).save()
//     res.status(201).send({message:"Service created Succesfully"})

// }

module.exports = {ViewService}