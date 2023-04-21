const express = require('express')

const app = express();
const PORTA = 3000;


app.get("/api/clientes", (req, res) => {
    res.send("Lista de Clientes");
})

app.get("/api/clientes/:id",(req, res) => {
    const id = req.params.id;
    res.send(`Buscar por id: ${id}`);
})

app.post("/api/clientes", (req, res) => {
    res.send("Cadastro de Clientes");
})

app.put("api/clientes/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Atualizando o Cliente ${id}`);
})

app.delete("api/clientes/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Deletando o Cliente ${id}`);
})

app.listen(PORTA, () => {
    console.log(`Servidor Iniciando na Porta ${PORTA}`);
})