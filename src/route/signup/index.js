const {Router} = require('express')
const signUp = require('../controllers/signup')
const {User} = require('../../db/models/User')
const res = require('express/lib/response')

const router = Router()

router.post('/', signUp)


module.exports=router;