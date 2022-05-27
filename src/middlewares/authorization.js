const jwt = require('jsonwebtoken') 

function authorization(req, res, next) {
    try {
        const {authorization} = req.headers
    const authEntity = jwt.verify(authorization, process.env.ACCESS_TOKEN)
    if(authEntity.userId) {
        req.userId = authEntity.userId
        next()
    }
        
    } catch (error) {
        return res.status(400).send("You dont have authorization")
        
    }
    
    
}

module.exports = authorization;