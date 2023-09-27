
//Librerias
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//Routes
const UsuariosRoutes = require("./src/routes/UserRoutes"); 

const app = express();

//Datos codifcados en URL
app.use(bodyParser.urlencoded({ extended: true }));

//Analiza objeto Json
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  }),
);

app.get('/status', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'Servidor Corriendo'
    })
});


//Conexion a base de datos
let MONGODB_URI = `mongodb://${process.env.BD_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.MONGO_DB}?retryWrites=true&authSource=admin`;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Base de Datos Connected");
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

//Setting Routes
app.use("/api", UsuariosRoutes)  

//Export
module.exports = app;