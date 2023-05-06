const mongoose = require('mongoose');

const ClientesSchema = new mongoose.Schema({

    nome: String,
    email: String

},{
    versionKey:false

});

const Clientes = mongoose.model("Clientes", ClientesSchema);

module.exports = Clientes;