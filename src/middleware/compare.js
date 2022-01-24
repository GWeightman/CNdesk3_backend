const bcrypt = require("bcryptjs");
const User = require("../user_info/user_model")

exports.hash_compare = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.params.username })
    if (await bcrypt.compare(req.body.password, req.user.password)) {
        next();
    }
    else {
        res.send({ message: "NoAuth"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};