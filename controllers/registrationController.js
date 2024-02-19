const bcrypt = require("bcrypt");
const User = require("../model/User");

const handleNewUser = async (req, res) => {
  const { userName, pwd } = req.body;

  if (!userName || !pwd) {
    return res.status(400).json({ failed: "username and password required" });
  }

  const duplicate = await User.findOne({ username: userName });

  if (duplicate) {
    return res.status(409).json({ conflict: "user already exists" });
  } else {
    const hashedPwd = await bcrypt.hash(pwd, 10);

    const newUser = { username: userName, pwd: hashedPwd };

    User.create(newUser);

    res.status(201).json({ success: `New user ${userName} created!` });
  }
};

module.exports = { handleNewUser };
