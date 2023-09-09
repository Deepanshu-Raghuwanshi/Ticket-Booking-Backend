const express = require("express");
const router = express.Router();
const multipart = require("connect-multiparty");
const path = require("path");
const cloudinary = require("cloudinary");
const { saveData,getData,deleteId,updateMovieSeat,getMovieById} = require('../reporesitory/movieCurd')
const {FileUploadCloudinary} = require('../controllers/movieImage')


const multipartMiddleware = multipart({
  uploadDir: path.join(__dirname, "../uploads"),
});

cloudinary.config({
  cloud_name: "ddfv2cmu5",
  api_key: "247635989244889",
  api_secret: "nxTh-LbJhjt6cxXQWwihqsA5VIo",
  secure: true,
});



router.post('/imagesave',multipartMiddleware, async (req,res)=>{
 const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
const result = await cloudinary.uploader.upload(
    req.files.poster.path,
    options
  ).then((data) => {
  const data1 = {
    name:req.body.name,
    availableseats:req.body.availableseats,
    rating:req.body.rating,
     ticketprice:req.body.ticketprice,
     showtime:req.body.showtime,
     totalseats:req.body.totalseats,
    poster:data.url
  }
  let savedData =  saveData(data1).then((resu)=>{
    
    res.json({
      message:'Movie Added Sucessfully'
    })
  }).catch((error)=>{
    console.log(error)
  })
   
  }).catch((err) => {
    res.json({
      message: "failed to upload data to cloudinary",
      error: err,
    });
  })
})

router.get('/imagedata',async(req,res)=>{
  const data = await getData()
  res.json({
    data:data
  })
})

router.post('/delete',async(req,res)=>{
   const id = req.body.id
  const data1 = await deleteId(id).then((data)=>{
    res.json({
    message:'Movie Deleted From Cineplex',
    data:data
  })
  }).catch((error)=>{
  res.json({
    error:error
  })
  })
  })

router.post('/updateseats',async(req,res)=>{
  const data1 =  updateMovieSeat(req.body).then((data)=>{
  res.json({
    message:'Seats Booked Sucessfully',
    data:data
  })
 }).catch((error)=>{
  res.json({
    message:'Failed Booking Seats',
    error:error
  })
 })
})

router.post('/getdatabyid', async(req,res)=>{
     const data1  = getMovieById(req.body.id).then((data)=>{
          res.json({
              data:data
     })
   }).catch((error)=>{
       res.json({
          message:'Failed Getting Data',
         error:error
       })
    
   
   })
})





module.exports = router; 