const express = require('express'),
    app = express(),
    port = process.env.PORT || 3004;
    mongoose = require('mongoose')
    Task = require('./api/models/todoListModel'),//created model loading here
    bodyParser = require('body-parser');

//mongoose instance connected url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://tunghvgcs220222:tunghien1@tungho.r3v82pm.mongodb.net/?retryWrites=true&w=majority&appName=TungHo');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);