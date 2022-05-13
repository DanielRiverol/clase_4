const User= require('../models/User')


const save = async(req,res)=>{
    const {name, lastName, email, password}= req.body

    const user = new User({name, lastName, email, password})

    const newUser= await user.save()
    res.status(201).json({msg:"usuario creado"})
    console.log(newUser);
}


module.exports = {save}