const express = require('express');

const app = express();

const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

require('dotenv/config');

app.get('/', (req, res) => {
    res.send('Hello World');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected');
});

app.listen(port);
