const express = require('express');
const loginController = require('../controller/login_controller');

const router = express.Router();

//rota do recurso: '/api/login'

router.get("/", loginController.listar);

router.get("/:id", loginController.buscarPorId);

router.post("/", loginController.inserir);

router.put("/:id", loginController.atualizar);

router.delete("/:id", loginController.delete);

module.exports = router;

