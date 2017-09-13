var consign = require('consign')
var logger = require('morgan')
var express = require('express')
var app = express()

app.use(logger('dev'))
require('../routes/index')(app)
consign().include('routes').into(app)


module.exports = app