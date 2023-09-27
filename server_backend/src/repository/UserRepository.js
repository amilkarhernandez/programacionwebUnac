const {Response} = require("../utils/Response"); 
const UserModel = require("../models/UsuariosModels");

module.exports.CreateUser = async (user) =>{
    return new Promise((resolve, reject) => {
        user
        .save()
        .then((resp)=>{
            Response.status = 201;
            Response.message = "Se ha creado el Usuario Correctamente";
            Response.result = resp;
            resolve(Response);
        })
        .catch((err) =>{
            console.log("error:", err)
            Response.status = 500;
            Response.message = "Ocurrio un error en el servidor";
            Response.result = err;
            reject(Response);
        })
    });
}

module.exports.FindAllUser = async () =>{
    return new Promise((resolve, reject) => {
        UserModel
        .find()
        .then((resp)=>{
            Response.status = 200;
            Response.message = "Registros Encontrados";
            Response.result = resp;
            resolve(Response);
        })
        .catch((err) =>{
            console.log("error:", err)
            Response.status = 500;
            Response.message = "Ocurrio un error en el servidor";
            Response.result = err;
            reject(Response);
        })
    });
}
