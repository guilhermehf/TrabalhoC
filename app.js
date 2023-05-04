
const express = require('express')
const  rotaClientes = require('./rotas/clientes_rotas')

const app = express();
const PORTA = 3000;
const mongoose = require('mongoose')



app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/cadastro_clientes', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    
  }).then(()=> {
    console.log('BD conectado');
  })
  .catch((error)=> {
    console.log('Error ao conectar ao BD', error);
  });
mongoose.Promise = global.Promise

app.use('/api/clientes', rotaClientes);

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
})