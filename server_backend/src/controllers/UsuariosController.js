const UserModel = require("../models/UsuariosModels");
const {CreateUser, FindAllUser} = require("../repository/UserRepository");

async function create(req, res){
    const params = req.body;

    const user = new UserModel();

    if(params.nombres == "" || params.nombres == undefined){
        res.status(404).send({message: "El nombre es Requerido"});
        return;
    }

    user.nombres =  params.nombres;
    user.apellidos =  params.apellidos;
    user.telefono = params.telefono;
    user.email = params.email;
    user.edad = params.edad;
    user.usuario = params.usuario;
    user.password = params.password;

    const response = await CreateUser(user);
    res.status(response.status).send(response);
}

async function findAll(req, res){
    const response = await FindAllUser();
    res.status(response.status).send(response);
}


module.exports = {
    create,
    findAll
}


