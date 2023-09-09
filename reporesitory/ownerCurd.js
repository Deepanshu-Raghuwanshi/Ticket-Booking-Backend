const ownerModel = require('../models/owner')

const saveData = (data) => {
  const user = new ownerModel(data)
  return user.save()
}

const getData = (data) => {
  return ownerModel.find()
}

const getDataByUserName = (username) => {
  return ownerModel.findOne({ username: username });
};



module.exports = {
  saveData, getData,getDataByUserName

}