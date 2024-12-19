const express = require('express');
const app = express();
const sendData = require('../srv/routes/send-data');
const showData = require('../srv/routes/show-data');

app.use(express.json());
app.use('/send-data',sendData);
app.use('/show-data',showData);


module.exports = app;