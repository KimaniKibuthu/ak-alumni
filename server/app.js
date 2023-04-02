const express = require('express');
const cors = require('cors');
const app = express();


// ROUTES
const records = require('./routes/records/record');

const corsOption = {
    origin: '*'
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// MIDDLEWARES
app.use('/records', records);

module.exports = app