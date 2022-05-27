const {Router} = require('express')
const Login = require('../controllers/login')


const router = Router()

router.post('/login', Login)


module.exports=router;