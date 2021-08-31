const USER = require('../model/userModel')
const bcrypt = require('bcrypt')
module.exports = {
addUser:async(req,res)=>{

    const nom = req.body.nom
    const prenom = req.body.prenom
    const email = req.body.email
    const salt = await bcrypt.genSalt(10);
    const hashedPasswor = await bcrypt.hash(req.body.password, salt);
    const password = hashedPasswor;
    try{
        const user =  new USER({
            nom , prenom ,email,password
        })
        user.save()
        res.json(user)
    }catch(error){
        console.log(error)
    }
},
getAllUsers:async(req,res)=>{
    try{
        const user = USER.find()
        res.json(user)
    }catch(error){
        console.log(error)
    }
},
deleteUser:async(req,res)=>{
   try{ const user = USER.findByIdAndDelete(req.params.id)
    res.json(user)}
    catch(error){
        console.log(error)
    }
},
updateUser:async(req,res)=>{
try{    const user = USER.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(user)}
    catch(error){
        console.log(error)
    }
}
}
