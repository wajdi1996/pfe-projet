const OFFER = require('../model/offerModel')
const fs = require('fs')

 module.exports = {
addOffer:async(req,res)=>{
    const nom = req.body.nom
    const prenom = req.body.prenom
    const email = req.body.email
    const image =    req.file.filename
    const description = req.body.description
    const telephone = req.body.telephone
     try{
        const Offer = await new OFFER({
            nom , prenom ,email,image,description,telephone
        })
        Offer.save()
        res.json(Offer)
    }catch(error){
        console.log(error)
    }
},
getAllOffers:async(req,res)=>{
    try{
        const Offer = OFFER.find()
        res.json(Offer)
    }catch(error){
        console.log(error)
    }
},
deleteOffer:async(req,res)=>{
   try{ const Offer = OFFER.findByIdAndDelete(req.params.id)
    res.json(Offer)}
    catch(error){
        console.log(error)
    }
},
updateOffer:async(req,res)=>{
try{    const Offer = OFFER.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(Offer)}
    catch(error){
        console.log(error)
    }
}
}
