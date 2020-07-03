const express = require('express');
// const routes = require('./routes/api');
const bodyParser = require('body-parser');
var createError = require('http-errors');
var path = require('path');
// var logger = require('morgan');


const cors = require('cors');
const http = require('http');
//Models
require('./models/user');

//Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api');

//Configs
require('./config/connection');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.port || "3000";
//CORS Solution

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'DELETE, GET, POST, OPTIONS, PUT');
    next();
});

const api = require('./routes/api');
app.use('/', api);




// app.listen(port);
// console.log("Server Listening at port " + port);

app.listen(port, () => {
    console.log(`server is running on port ${port}.`)
})