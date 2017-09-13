var express = require('./bootstrap/app')
var port = process.env.PORT || 3001

express.listen(port, function (){
	console.log('Servidor rodando em http://localhost:%s', port)
})

