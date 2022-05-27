const {Router} = require('express')
const getProducts = require('../controllers/getProducts')
const authorization = require('../../middlewares/authorization')


const router = Router()

router.get('/all',authorization, getProducts)


module.exports=router;