
const cloudinary = require('cloudinary').v2;
console.log("SECRET LENGTH:", process.env.CLOUD_API_SECRET.length);
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME.trim(),
    api_key:process.env.CLOUD_API_KEY.trim(),
    api_secret:process.env.CLOUD_API_SECRET.trim()
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wanderlust_DEV',
        allowed_formats: ["png","jpg","jpeg","avif","webp"]
  },
});

module.exports={
    cloudinary,
    storage,
}