require('dotenv').config();

const bodyParser = require("body-parser");
const express    = require("express");

const PORT = process.env.PORT;

const app = express();
// require database configuration
require('./configs/db.config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const index = require('./routes/index');
const api = require('./routes/api')
app.use('/', index);
app.use('/api', api );


app.listen(PORT, () => console.log("server running"));