const express = require('express')

const app = express();
const PORTA = 3000;

app.get("/api/login", (req, res) => {
    res.send("Lista de Login");
})

app.get("/api/login/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Buscar pelo id: ${id}`);
})

app.post("/api/login", (req, res) => {
    res.send("Cadastro de Login");
})

app.put("/api/login/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Atualizando o login ${id}`);
})

app.delete("/api/login/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Deletando o Login ${id}`);

})

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
})
