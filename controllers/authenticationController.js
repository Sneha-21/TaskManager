const User = require("../model/User");
const bcrypt = require("bcrypt");

const handleUser = async (req, res) => {
  const { userName: username, pwd } = req.body;
  const foundUser = await User.findOne({ username });
  if (!foundUser) {
    res.status(401).json({ failed: "user not found" });
  } else {
    const match = await bcrypt.compare(pwd, foundUser.pwd);

    if (match) {
      res.json({ success: "Login success" });
    } else {
      res.json({ failed: "Incorrect password" });
    }
  }
};

module.exports = { handleUser };
