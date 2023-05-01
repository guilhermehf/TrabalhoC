const express = require('express');
const clientesController = require('../controller/clientes_controller');

const router = express.Router();

//Rota do recurso: 'api/clientes'

router.get("/", clientesController.listar);

router.get("/:id", clientesController.buscarPorId);

router.post("/", clientesController.inserir);

router.put("/:id", clientesController.atualizar);

router.delete("/:id", clientesController.deletar);

module.exports = router;