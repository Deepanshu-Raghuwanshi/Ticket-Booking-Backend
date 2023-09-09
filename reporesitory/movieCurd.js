const movieModel = require('../models/movie')

const saveData = (data) => {
  const user = new movieModel(data)
  return user.save()
}

const getData = (data) => {
  return movieModel.find()
}

const deleteId = (id) => {
 return movieModel.deleteOne({ _id: id })
};

const updateMovieSeat = (data) => {
 let updatedData = {
    availableseats:data.data.seats
  }
  return movieModel.updateOne({ _id: data.data.id }, updatedData);
};

const getMovieById = (id) => {
  return movieModel.findById(id);
};


module.exports = {
  saveData, getData,deleteId,updateMovieSeat,getMovieById

}