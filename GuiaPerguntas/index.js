const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const connection = require("./database/database");

// Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão Feita Com o Banco De Dados")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

// Estou dizendo para o Express usar o EJS como view engine
app.set("view engine", "ejs");

app.use(express.static('public'));

// BodyParser

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {

    res.render("index.ejs")
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar.ejs")
})

app.post("/salvarPergunta", (req, res) => {

    var titulo = req.body.Título;

    var desc = req.body.Descricao;

    res.send(`Título: ${titulo} <br> Descrição: ${desc}`)
})

app.listen(4000, () => {
    console.log("App Rodando");
});