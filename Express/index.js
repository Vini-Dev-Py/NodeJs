const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Bem vindo a Home!</h1>")
})

app.get("/blog", function(req, res) {
    res.send("<h1>Bem vindo ao blog !</h1>")
})

app.get("/suporte", function(req, res) {
    res.send("<h1>Bem vindo ao suporte !</h1>")
})

app.get("/BemVindo/:nome/:sobreNome?", function(req, res) {

    var nome = req.params.nome;
    var sobreNome = req.params.sobreNome;

    if (sobreNome) {
        res.send(`<h1>Bem vindo ${nome} ${sobreNome}</h1>`)
    } else {
        res.send(`<h1>Bem vindo ${nome}</h1>`)
    }
})

app.get("/canal/youtube", function(req, res) {
    var canal = req.query["canal"];

    if (canal) {
        res.send(canal)
    } else {
        res.send("Nem um canal fornecido")
    }
})

app.listen(4000, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro !");
    } else {
        console.log("Servidor Iniciado Com Sucesso !");
    }
})