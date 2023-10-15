const db = require('../models/db.js')
const bcrypt = require("bcrypt")

exports.handleRegister = async(req,res)=>{
    const {email,password}=req.body;

    if(!email|| !password) return res.status(401).json({message:"abe input to daal"});
    const encryptedPassword = await bcrypt.hash(password,10)

    const user = await db.create({
        username:email,
        password:encryptedPassword
    })

    const token = jwt.sign(
        {userID : user._id,email},
        proces.env.TOKEN_KEY,
    )

    user.token = token
    res.status(200).json(user);

}
exports.handleLogin = async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password) return res.status(404).json({message : "not found"})

    const isEmailExist = 
}

