const bcrypt = require("bcrypt");
const saltRounds = 10;
const encryptPassword = (req, res, next) => {
  const password = req.body.data.password;

  bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) {
      console.log(err);
      res.send("Error Password");
      return;
    }
    req.body.data.password = hash; 
    next();
  });
};

module.exports = encryptPassword;
