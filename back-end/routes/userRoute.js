const router = require('express').Router()
const user = require('../controller/userController')
router.get('/getAllUsers',user.getAllUsers)
router.post('/addUser',user.addUser)
router.delete('/deleteUser',user.deleteUser)
router.put('/updateUser',user.updateUser)
module.exports= router