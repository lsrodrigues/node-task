var bodyParser = require('body-parser')
var consign = require('consign')
var logger = require('morgan')
var express = require('express')
var app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(bodyParser.json())
require('../routes/index')(app)

consign().include('routes').into(app)

module.exports = app