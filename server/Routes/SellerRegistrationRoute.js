const router = require("express").Router();
const multer = require("multer");
const { sellerRegistrationController } = require("../Controllers/SellerRegistrationController");

const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDNARY_API_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECREAT,
  });
  
  
  // Configure Multer to use Cloudinary as storage
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'cover', // optional, destination folder in Cloudinary
      allowed_formats: ['jpg', 'jpeg', 'png'], // optional, allowed formats
      // other configuration options
    },
  })
  
  const upload = multer({
    storage:storage
  });

router.post("/", sellerRegistrationController)

// , upload.single('image')

module.exports=router;