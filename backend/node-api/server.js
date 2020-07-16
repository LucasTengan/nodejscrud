const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi',
 { useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir('./src/models')

//O mongodb é um ORM, não depende da linguagem de banco de dados para realizar as operações


//Primeira rota
app.use('/api', require('./src/routes'))
// o método use é um wildcard para post, get, put, delete...

// o parâmetro req controla tudo que envolve requisição: parametros, corpo, cabeçalho, usuário, autenticação, ip...
// res: resposta que vai ser dada à requisição
app.listen(3001);