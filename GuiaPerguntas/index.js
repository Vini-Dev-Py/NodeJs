const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const connection = require("./database/database");

const Pergunta = require("./database/Pergunta");

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
    Pergunta.findAll({ raw: true, order: [
        ['id', 'DESC'] // ASC = Crescente // DESC = Decrescente
    ]}).then(perguntas => {
        res.render("index.ejs", {
            perguntas: perguntas
        });
    });
    // SELECT * FROM PERGUNTA;
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar.ejs")
})

app.post("/salvarPergunta", (req, res) => {

    var titulo = req.body.Título;

    var desc = req.body.Descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: desc
    })
    .then(() => {
        res.redirect("/")
    })
    .catch(() => {
        alert("Erro na Sua Pergunta !")
    })
})

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;

    Pergunta.findOne({
        where: {
            id: id
        }
    }).then(pergunta => {
        if (pergunta != undefined) {
            res.render("pergunta", {
                pergunta: pergunta
            })
        } else {
            res.redirect("/")
        }   
    })
})

app.listen(4000, () => {
    console.log("App Rodando");
});