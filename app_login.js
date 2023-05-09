const mongoose = require('mongoose')
const express = require('express')
const rotaLogin = require('./rotas/login_rotas')

const app = express();
const PORTA = 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));



mongoose.connect('mongodb://127.0.0.1:27017/cadastro_clientes', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('BD conectado');
})
.catch((error) => {
    console.log('Error ao conectar ao BD', error);
});

mongoose.Promise = global.Promise


app.use('/api/login', rotaLogin);

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
})
