const express = require('express')
const routes = express.Router()
//CRIANDO COENXÃO COM O CONTROLLER
const CadastroController = require("../controllers/CadastroController");
//CRIANDO CONEXÃO COM A MIDDLEWARE
const CadastroMiddleware = require('../middlewares/CadastroMiddleware');

//ROTA DA LISTA DE CADASTRO
routes.get("/cadastro", CadastroController.index);
//ROTA DO CADASTRO
routes.post("/cadastro", CadastroController.store);

//ROTA DE DELETAR CADASTRO
routes.delete("/cadastro/:id", CadastroMiddleware.validateId, CadastroController.delete);

//ROTA DE UPDATE
routes.put("/cadastro/:id", CadastroMiddleware.validateId, CadastroController.update);

module.exports = routes