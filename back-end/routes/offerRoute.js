const store = require('../middleware/multer')

const router = require('express').Router()
const Offer = require('../controller/offerController')
router.get('/getAllOffers',Offer.getAllOffers)
router.post('/addOffer',store.single('image'),Offer.addOffer)
router.delete('/deleteOffer',Offer.deleteOffer)
router.put('/updateOffer',Offer.updateOffer)
module.exports= router