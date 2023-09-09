const userModel = require('../models/user')

const saveData = (data) => {
  const user = new userModel(data)
  return user.save()
} 

const getData = (data) => {
  return userModel.find()
}

const getDataByUserName = (username) => {
  return userModel.findOne({ username: username });
};

module.exports = {
  saveData, getData,getDataByUserName

}