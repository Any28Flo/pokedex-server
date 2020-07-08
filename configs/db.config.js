require('dotenv').config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(x => console.log(`Connected to Mongo! `))
    .catch(err => console.error('Error connecting to mongo', err));

