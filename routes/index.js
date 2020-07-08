const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res) => res.status(400).json({ message: 'Welcome to pokedex api' }));

module.exports = router;