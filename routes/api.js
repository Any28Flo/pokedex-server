const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/users', (req, res) => console.log("hol_2"));

module.exports = router;