const express = require('express'),
    app = express(),
    dotenv = require('dotenv'),
    port = 3000,
    bodyParser = require('body-parser');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);