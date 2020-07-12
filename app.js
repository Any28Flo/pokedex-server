require('dotenv').config();
const bodyParser = require("body-parser");
const express    = require("express");
const cors = require("cors");

const PORT = process.env.PORT;

const app = express();
// require database configuration
require('./configs/db.config');

app.use(cors({
    credentials : true,
    origin: ['http://localhost:3000']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const index = require('./routes/index');
const api = require('./routes/api')
const files = require('./routes/file')

app.use('/', index);
app.use('/api', api );
app.use('/file',files);

app.listen(PORT, () => console.log(`Server running on ${process.env.PORT}`));