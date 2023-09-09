const { saveData, getDataByUserName } = require("../reporesitory/userCurd");
const bcrypt = require("bcrypt");

const Signup = (req, res) => {
  saveData(req.body.data)
    .then((result) => {
      res.json({
        message: 'Account Created SucessFully',
        data:result
      })
    })
    .catch((err) => {
      res.json({
        message: "Failed",
        data: null,
        error: err.toString(),
      });
    });
};

const Login = (req, res) => {
  getDataByUserName(req.body.data.username)
    .then((result) => {
      if (result) {
        bcrypt.compare(
          req.body.data.password,
          result.password,
          function(err, data) {
            if (!data) {
              res.json({
                message: "Password Wrong",
                data: null,
                error: "invalid password",
              });
            } else {
              res.json({
                message: "Sucess login",
                data: result,
              })
            }
          }
        );
      } else {
        res.json({
          message: "Failed",
          data: null,
          error: "Username not found",
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Failed",
        data: null,
        error: err.toString(),
      });
    });
};

module.exports = { Signup, Login };

