let listaClientes = [
    {id:1, nome: "Felipe", email: "felipe@gmail.com"},
    {id:2, nome: "Diego", email: "diego@gmail.com"},
    {id:3, nome: "Pedro", email: "pedro@gmail.com"}
]

let idAutoIncrement = 4;

exports.listar = (req, res) => {
    res.json(listaClientes);
}

exports.buscarPorId = (req, res) => {

    const id = req.params.id;
    
    const clienteEncontrado = listaClientes.find((clientes) => {
        return (clientes.id == id);

    })

    if(clienteEncontrado){
        return res.json(clienteEncontrado);
    }

    else {
        return res.status(404).json({ Erro: "Cliente nao encontrado"});
    }

}

exports.inserir = (req, res) => {

    //Receber o Produto
    const novoCliente = req.body;
    //validar os dados

    if(novoCliente && novoCliente.nome && novoCliente.email){
        //Se Ok, cadastra o cliente e retorno 201
        novoCliente.id = idAutoIncrement++;
        listaClientes.push(novoCliente);
        return res.status(201).json(novoCliente);
    }
    else{
        //senao retorna 400
        return res.status(200).json({Erro: "Nome sao obrigatorios"});
    }

}
//Ainda ta com erro
exports.atualizar = (req, res) => {

    const id = req.params.id;
    

    const clienteAlterar = req.body;

    if(!clienteAlterar || !clienteAlterar.nome || !clienteAlterar.email){
        return res.status(400).json({
            Erro: "Nome sao obrigatorios"
        });
    }

    const clienteEncontrado = listaClientes.find((clientes) => {
        return (clientes.id == id);
    })

    if(clienteEncontrado){
        clienteEncontrado.nome = clienteAlterar.nome;
        clienteEncontrado.email = clienteAlterar.email;
        return res.json(clienteEncontrado);
    }

    else{
        return res.status(404).json({ Erro: "Cliente nao encontrado"});
    }

}
// ainda ta com erro
exports.deletar = (req, res) => {

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

}
