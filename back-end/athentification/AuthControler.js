const USER = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
module.exports={
    register:async(req,res)=>{
    USER.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(user) return  res.status(400).json({
            message:'Email already been used'
        });

         const nom = req.body.nom;
         const prenom = req.body.prenom;
         const sexe = req.body.sexe
         const telephone = req.body.telephone;
         const email = req.body.email;
       //encryption password
    const salt =   bcrypt.genSaltSync(10);
    const hashedPasswor =   bcrypt.hashSync(req.body.password, salt);
    const password = hashedPasswor;
      
        const _user = new USER({
            nom,
            prenom,
            telephone,
            sexe,
            email,
            password 
           });
     _user.save((error,data) =>{
            if(error){
                return res.status(400).json({
                    message:'Somthing went wrong!'
                })
            }
            if(data){
                return res.status(201).json({
                    message:'User created Successfuly..!'  ,
                data          })
    
            }
        })
    });
    
    },
    signIn:async(req,res)=>{
        USER.findOne({email:req.body.email})
        .exec((error,user)=>{
            if(error){
                return res.status(400).json({error}) }
                if(user){
                    const comparePassword = bcrypt.compare(user.password ,req.body.password)
                    if ( comparePassword ){
                        const token = jwt.sign({_id:user._id,role:user.role,nom:user.nom},'MEARNSECRET',{expiresIn:'1h'})
                         res.cookie('token',token,{expiresIn:'1h'})
                        res.status(200).json({
                            token                
                        })
                    }else{
                        return res.status(400).json({
                            message:'Invalid Password'
                        })
                    }
    
                }else{
                    return res.status(400).json({message:'SomeThing went wrong !'})
                }
           
        })
    }  
     
    
    }