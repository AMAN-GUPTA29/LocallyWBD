const jwt = require('jsonwebtoken');
const { Admin } = require('../Models/admin');


function authenticateToken(req,res,next)
{
    const authHeader = req.headers.Authorization || req.headers.authorization; 
    if(!authHeader || !authHeader.startsWith("Bearer "))
    {
        return res.sendStatus(401);
    }

    const token=authHeader.split(" ")[1];
    console.log(token)
    jwt.verify(token,process.env.JWTPRIVATEKEY,async (err,decoded)=>
    {
        if(err)
        {
            // console.log(token);
            return res.status(430).json({ error: err });
        }

        console.log("verified1")

        const userId=decoded._id;

        console.log(userId)

        const user=await Admin.findById(userId);

        req.user=user;
        console.log("heyhere");
        console.log(req.user);
        next();
});
}

module.exports = {authenticateToken}