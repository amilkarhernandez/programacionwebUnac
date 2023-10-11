const express = require("express")
const UsersController = require("../controllers/UsuariosController");

const api = express.Router();

api.post("/usuarios/login", UsersController.login);
api.post("/usuarios/create", UsersController.create);
api.get("/usuarios/listar/:sort", UsersController.findAll);
api.get("/usuarios/findbyid/:id", UsersController.findById);
api.get("/usuarios/findusername/:username", UsersController.findOneUsuario);
api.delete("/usuarios/delete/:id", UsersController.deleteUserData);
api.put("/usuarios/update/:id", UsersController.updateUserData);

module.exports = api;
