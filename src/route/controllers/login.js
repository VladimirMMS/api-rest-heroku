const { User, comparatePassword } = require("../../db/models/User");
const jwt = require('jsonwebtoken') 
const dotenv = require("dotenv");

dotenv.config();

async function Login(req, res) {
  const { name, password } = req.body;

  try {
    if (name && password) {
      const getUsername = await User.findOne({ where: { name: name } });
      if (getUsername == null) {
        return res.status(300).send("It doesn't exist that user");
      } else {
        const Userpassword = getUsername.password;
        const comparate = await comparatePassword(Userpassword, password);
        if (comparate) {    
          const acessToken = jwt.sign({userId: getUsername.id}, process.env.ACCESS_TOKEN, {expiresIn: '1m'})
          return res.send({acessToken: acessToken});
        } else {
          return res.send("The password is wrong");
        }
      }
    }
  } catch (error) {
      console.log(error)
    res.send("sdfsdfsd");
  }
}

module.exports = Login;
