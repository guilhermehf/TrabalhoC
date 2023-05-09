const Login = require("../model/login");

let listaLogin = [
    {id: 1, login: "admin", senha: "admin"},
    {id: 2, login: "predio", senha: "predio"},
    {id: 3, login: "aluno", senha: "123"},
]

let idAutoIncrement = 4;

exports.listar = async (req, res) => {

    try{
        const login = await Login.find();
        res.json(login);
    }
    catch(err){
        res.status(500).json({Erro:err});
    }
}

exports.buscarPorId = async (req, res) => {


    const id = req.params.id;

    try{

        const loginEncontrado = await Login.findById(id);
        if(loginEncontrado){
            return res.json(loginEncontrado);
        }
        else{
            return res.status(404).json({ Erro: "Login nao encontrado"});

        }

    } catch(err){
        res.status(500).json({Erro:err});
    }

}

exports.inserir = async (req, res) => {

      //Receber o cliente
    const loginRequest = req.body;
    //Validar os dados

    if(loginRequest && loginRequest.login && loginRequest.senha){
        //Se Ok, cadastra o cliente e retorno 201

        const loginNovo = new Login(loginRequest);

        try{
            const loginSalvo = await loginNovo.save();
            return res.status(201).json(loginSalvo);
        }
        catch(err){
            res.status(500).json({Erro:err});
        }
    }
    else{
        //senao retorna 400
        return res.status(400).json({
            Erro: "Login e/ ou senha sao obrigatorio"

        });

    }

}

exports.atualizar = async (req, res) => {

   

    const id = req.params.id;

    const loginAlterar = req.body;

    if(!loginAlterar || !loginAlterar.login || !loginAlterar.senha){
        return res.status(400).json({
            Erro: "Login e/ou senha sao obrigatorios"
        });
    }

    try{
        const loginAtualizar = await Login.findByIdAndUpdate(id, loginAlterar, {new:true});

        if(loginAtualizar){
            return res.json(loginAtualizar);
        }
        else {
            return res.status(404).json({ Erro: "Login nao encontrado"});
        }
        }catch(err) {
            res.status(500).json({Erro: err});
        }

}

exports.delete = async (req, res) => {

    const id = req.params.id;

    try{
        const loginDeletado = await Login.findByIdAndDelete(id);
        if(loginDeletado){
            return res.json(loginDeletado);
        }
        else{
            return res.status(404).json({ Erro: "Login nao encontrado"});
        }
    } catch(err){
        res.status(500).json({Erro: err});

    }

}

