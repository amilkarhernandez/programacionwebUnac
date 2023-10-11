const UserModel = require("../models/UsuariosModels");
const {CreateUser, FindAllUser, FindOneUser, FindOneUsername, deleteUser, updateUser} = require("../repository/UserRepository");
const bcrypt = require("bcrypt-nodejs");

async function create(req, res){
    const params = req.body;

    const user = new UserModel();

    if(params.nombres == "" || params.nombres == undefined){
        res.status(404).send({message: "El nombre es Requerido"});
        return;
    }

    //Encriptar
    bcrypt.hash(params.password, null, null, async function (err, hash){
        if(hash){
            user.nombres =  params.nombres;
            user.apellidos =  params.apellidos;
            user.telefono = params.telefono;
            user.email = params.email;
            user.edad = params.edad;
            user.usuario = params.usuario;
            user.password = hash;

            const response = await CreateUser(user);
            res.status(response.status).send(response);
        }
    });
}

async function findAll(req, res){
    const sort = req.params["sort"];

    const query = { nombres: sort };
    
    const response = await FindAllUser(query);
    res.status(response.status).send(response);
}

async function findById(req, res){
    const id = req.params["id"];
    const response = await FindOneUser(id);
    res.status(response.status).send(response);
}

async function findOneUsuario(req, res){
    const username = req.params["username"];
    const response = await FindOneUsername(username);
    res.status(response.status).send(response);
}

async function deleteUserData(req, res){
    const id = req.params["id"];
    const response = await deleteUser(id);
    res.status(response.status).send(response);
}

async function updateUserData(req, res){
    const id = req.params["id"];
    const body = req.body;

    let user = new UserModel();
    user.nombres = body.nombres;
    user.apellidos = body.apellidos;

    const response = await updateUser(id, user);
    res.status(response.status).send(response);
}

async function login(req, res){
    const params = req.body;

    const user = await FindOneUsername(params.usuario);
    if(user){
        //Logueo
        bcrypt.compare(params.password, user.result.password, function (err, check) {
            if(check){
                res.status(200).send({message:"el usuario se encuentra logueado"});
            }else{
                res.status(400).send({message:"Usuario o contraseña Invalida 1"});
            }
        });    
    }else{
        res.status(400).send({message:"Usuario o contraseña Invalida"});
    }
}

module.exports = {
    create,
    findAll,
    findById,
    findOneUsuario,
    deleteUserData, 
    updateUserData,
    login
}


