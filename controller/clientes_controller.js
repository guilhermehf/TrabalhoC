const Clientes = require("../model/clientes");

let listaClientes = [
    {id:1, nome: "Felipe", email: "felipe@gmail.com"},
    {id:2, nome: "Diego", email: "diego@gmail.com"},
    {id:3, nome: "Pedro", email: "pedro@gmail.com"}
]

let idAutoIncrement = 4;

exports.listar = async (req, res) => {

    try{
        const clientes = await Clientes.find();
        res.json(clientes);
    }
    catch(err){
        res.status(500).json({Erro:err});
    }
    
}

exports.buscarPorId = async (req, res) => {
    
    const id = req.params.id;

    try{

        const clienteEncontrado = await Clientes.findById(id);
        if(clienteEncontrado){
            return res.json(clienteEncontrado);
        }
        else{
            return res.status(404).json({ Erro: "Cliente nao encontrado"});

        }

    } catch(err){
        res.status(500).json({Erro:err});
    }

    }
    
    

exports.inserir = async (req, res) => {

    //Receber o cliente
    const clientesRequest = req.body;
    //Validar os dados

    if(clientesRequest && clientesRequest.nome && clientesRequest.email){
        //Se Ok, cadastra o cliente e retorno 201

        const clientesNovo = new Clientes(clientesRequest);

        try{
            const clientesSalvo = await clientesNovo.save();
            return res.status(201).json(clientesSalvo);
        }
        catch(err){
            res.status(500).json({Erro:err});
        }
    }
    else{
        //senao retorna 400
        return res.status(400).json({
            Erro: "Nome e/ ou email sao obrigatorio"

        });
    }

    

}

exports.atualizar = async (req, res) => {


    const id = req.params.id;

    const clientesAlterar = req.body;

    if(!clientesAlterar || !clientesAlterar.nome || !clientesAlterar.email){
        return res.status(400).json({
            Erro: "Nome e/ou email sao obrigatorios"
        });
    }

    try{
        const clientesAtualizado = await Clientes.findByIdAndUpdate(id, clientesAlterar, {new:true});

        if(clientesAtualizado){
            return res.json(clientesAtualizado);
        }
        else {
            return res.status(404).json({ Erro: "Clientes nao encontrado"});
        }
        }catch(err) {
            res.status(500).json({Erro: err});
        }

}

exports.deletar = async (req, res) => {

    const id = req.params.id;

    try{
        const clientesDeletado = await Clientes.findByIdAndDelete(id);
        if(clientesDeletado){
            return res.json(clientesDeletado);
        }
        else{
            return res.status(404).json({ Erro: "Clientes nao encontrado"});
        }
    } catch(err){
        res.status(500).json({Erro: err});

    }

}
