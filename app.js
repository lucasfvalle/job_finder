const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta: ${PORT}`);
});

// DB connection
db
    .authenticate()
    .then(() =>{
        console.log("Conectou ao banco de dados")
    })
    .catch(err =>{
        console.log("Ocorreu um erro...")
    })

app.get('/', (req, res) =>{
    res.send("Está funcionando.");
})