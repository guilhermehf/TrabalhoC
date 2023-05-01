const express = require('express')
const  rotaClientes = require('./rotas/clientes_rotas')

const app = express();
const PORTA = 3000;



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/clientes', rotaClientes);


app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
})