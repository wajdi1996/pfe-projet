const  mogoose = require('mongoose')
const Schema = mogoose.Schema
module.exports = mogoose.model('users' , new Schema({
    nom:{
        type:String
,required:true    },
prenom:{
    type:String
,required:true    },
email:{
    type:String
,required:true    },
password:{
    type:String
,required:true    }

}))