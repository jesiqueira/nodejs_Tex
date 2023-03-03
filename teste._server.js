const http = require('http')

http.createServer(
    function(request, response){
        response.writeHead(200, {'Content-Type':'text/html'})
        response.end('Bem vindo ao NodeJS!')
    }
).listen(8080)
console.log('Server Rodando');