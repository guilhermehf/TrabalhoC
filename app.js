const express = require('express')

const app = express();
const PORTA = 3000;

let listaClientes = [
    {id:1, nome: "Felipe"},
    {id:2, nome: "Diego"},
    {id:3, nome: "Pedro"}
]

let idAutoIncrement = 4;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/api/clientes", (req, res) => {
    res.json(listaClientes);
})

app.get("/api/clientes/:id",(req, res) => {
    const id = req.params.id;
    
    const clienteEncontrado = listaClientes.find((cliente) => {
        return (clientes.id == id)

    })

    if(clienteEncontrado){
        return res.json(clienteEncontrado);
    }

    else {
        return res.status(404).json({ Erro: "Cliente nao encontrado"});
    }
})

app.post("/api/clientes", (req, res) => {
    
    //Receber o Produto
    const novoCliente = req.body;
    //validar os dados

    if(novoCliente && novoCliente.nome){
        //Se Ok, cadastra o cliente e retorno 201
        novoCliente.id = idAutoIncrement++;
        listaClientes.push(novoCliente);
        return res.status(201).json(novoCliente);
    }
    else{
        //senao retorna 400
        return res.status(200).json({Erro: "Nome sao obrigatorios"});
    }
})

app.put("api/clientes/:id", (req, res) => {
    const id = req.params.id;
    

    const clienteAlterar = req.body;

    if(!clienteAlterar || !clienteAlterar.nome){
        return res.status(400).json({Erro: "Nome sao obrigatorios"});
    }

    const clienteEncontrado = listaClientes.find((clientes) => {
        return (clientes.id == id);
    })

    if(clienteEncontrado){
        clienteEncontrado.nome = clienteAlterar.nome;
        return res.json(clienteEncontrado);
    }

    else{
        return res.status(404).json({ Erro: "Cliente nao encontrado"});
    }
})

app.delete("api/clientes/:id", (req, res) => {
    const id = req.params.id;
    

    const indiceClientes = listaClientes.findIndex(
        (clientes) => {
            return (clientes.id == id);
        }
    )

    if(indiceClientes >= 0){
        const clienteEncontrado = listaClientes.slice(indiceClientes, 1)[0];
        return res.json(clientesDeletado);
    }

    else {
        return res.status(404).json({Erro: "Cliente nao encontrado"});
    }
})

app.listen(PORTA, () => {
    console.log(`Servidor Iniciando na Porta ${PORTA}`);
})