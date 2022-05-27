const { User, generateHash } = require("../../db/models/User");

async function signUp(req, res) {
  const { name, password, role } = req.body;

  try {
    if (name && password) {
      const getUsername = await User.findOne({ where: { name: name } });
      if (getUsername !== null) {
        return res.status(300).send("The user already exist");
      }
      const newPassword = await generateHash(password);
      if (newPassword) {
        await User.create({
          name,
          password: newPassword,
          role,
        });
        return res.send("You signed up sucessfully");
      }
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = signUp;
