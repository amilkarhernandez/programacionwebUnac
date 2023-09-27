const express = require("express")
const UsersController = require("../controllers/UsuariosController");

const api = express.Router();

api.post("/usuarios/create", UsersController.create);
api.get("/usuarios/listar", UsersController.findAll);

module.exports = api;
