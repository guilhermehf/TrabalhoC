let listaLogin = [
    {id: 1, login: "admin", senha: "admin"},
    {id: 2, login: "predio", senha: "predio"},
    {id: 3, login: "aluno", senha: "123"},
]

let idAutoIncrement = 4;


app.get("/api/login", (req, res) => {
    res.json(listaLogin);
})

app.get("/api/login/:id", (req, res) => {
    const id = req.params.id;

    const loginEncontrado = listaLogin.find((login) => {
        return (login.id == id);
    })

    if(loginEncontrado){
        return res.json(loginEncontrado);
    }
    else {
        return res.status(404).json({ Erro: "Login nao encontrado"});
    }
})

app.post("/api/login", (req, res) => {
    

    //receber o login
    const novoLogin = req.body;
    //validar os dados

    if(novoLogin && novoLogin.login && novoLogin.senha){
        //se OK, cadastro os logins e retorna 201
        novoLogin.id = idAutoIncrement++;
        listaLogin.push(novoLogin);
        return res.status(201).json(novoLogin);
    }
    else{
        //senao retorna 400
        return res.status(400).json({
            Erro: "Nome e/ ou senha sao obrigatorios"

        });
    }
})

app.put("/api/login/:id", (req, res) => {
    const id = req.params.id;
    

    const loginAlterar = req.body;

    if(!loginAlterar || !loginAlterar.login || !loginAlterar.senha){
        return res.status(400).json({
            Erro: "Nome e/ou senha sao obrigatorios"
        });
    }

    const loginEncontrado = listaLogin.find((login) => {
        return (login.id == id);
    })

    if(loginEncontrado){
        loginEncontrado.login = loginAlterar.login;
        loginEncontrado.senha = loginAlterar.senha;
    }
    else {
        return res.status(404).json({ Erro: "Login nao encontrado"});
    }
})

app.delete("/api/login/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Deletando o Login ${id}`);

    const indiceLogin = listaLogin.findIndex(
        (login) => {
            return (login.id == id);
        }
    )

    if(indiceLogin >= 0){
        const loginDeletado = listaLogin.splice(indiceLogin, 1)[0];
        return res.json(loginDeletado);
    }
    else {
        return res.status(404).json({ Erro: "Login não encontrado"});
    }

})