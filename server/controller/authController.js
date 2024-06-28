const { user } = require("../models/models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth =
  ("/login",
  async (req, res) => {
    const { userName, password } = req.body;
    const userLogin = await user.findOne({ userName, password });
    console.log(userLogin);
    if (userLogin) {
      const token = jwt.sign(
        { id: userLogin._id, userName: userLogin.userName },
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      return res.send({ token });
    }
    res.status(400).send({ error: "Invalid username or password." });
  });

module.exports = auth;
