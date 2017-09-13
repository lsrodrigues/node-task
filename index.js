var express = require('express')
var app = express()

var port = process.env.PORT || 3000

app.get('/', function (request, response){
	response.send('hello world!')
})

app.listen(port, function (){
	console.log('Servidor rodando em http://localhost:%s', port)
})
