const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({

    login: String,
    senha: String

},{
    versionKey:false
});

const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;