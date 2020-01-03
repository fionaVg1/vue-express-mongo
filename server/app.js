const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const douBanMovie = require('./db');
app.use('/api/getHotMovies', (req, res) => {
    douBanMovie.find({}).exec(function (error, data) {
        res.json(data);
    });
});
app.listen(3000, () => {
    console.log('app listening on port 3000');
});