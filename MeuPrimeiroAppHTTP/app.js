var http = require("http");

http.createServer(function(requisicao, resposta) {
    resposta.end("Bem Vindo")
}).listen(8000);