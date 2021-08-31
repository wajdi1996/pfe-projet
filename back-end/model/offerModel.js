const  mogoose = require('mongoose')
const Schema = mogoose.Schema
module.exports = mogoose.model('offers',new Schema({
    nom:{
        type:String
,required:true    },
prenom:{
    type:String
,required:true    },
email:{
    type:String
,required:true    },
image:{
    type:String
,required:true    },
description:{
    type:String
,required:true    },
telephone:{
    type:String
,required:true    }



}))