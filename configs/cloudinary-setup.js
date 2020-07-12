const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name : process.env.cloudName,
    api_key : process.env.cloudKey,
    api_secret : process.env.cloudSecret
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'pokedex', // The name of the folder in cloudinary
    format: async (req, file) => ['jpg', 'png'], // supports promises as well
    public_id: (req, file) => 'computed-filename-using-request',
});

module.exports = multer(({storage}))