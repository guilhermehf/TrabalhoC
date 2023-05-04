const express = require('express')
const rotaLogin = require('./rotas/login_rotas')

const app = express();
const PORTA = 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/login', rotaLogin);

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
})
