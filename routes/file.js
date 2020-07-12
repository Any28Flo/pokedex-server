const express = require('express');
const router  = express.Router();

// include CLOUDINARY:

const uploader = require('../configs/cloudinary-setup');

router.post('/upload', uploader.single('imageUrl'), function (req, res) {

    res.json({ secure_url: req.file.path });

});
module.exports = router;
