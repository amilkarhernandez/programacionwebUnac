import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/Login.css";

const FormularioRegistro = () => {
  const navigate = useNavigate();
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = {
      nombres: nombres,
      apellidos: apellidos,
      email: email,
      usuario: usuario,
      password: password,
    };

    await axios
      .post("http://89.116.25.43:3500/api/usuarios/registrar", formData)
      .then((resp) => {
        console.log(resp);
        Swal.fire("Información!", "Creado Correctamente!", "success");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
  };

  return (
    <>
      <form>
        <div className="cardformRegister">
          <h4>Registro</h4>
          <div className="input_user">
            {/* <img className="icons" src={UserIcon} alt="user" /> */}
            <input
              className="inputs"
              type="text"
              placeholder="Nombres"
              onChange={(e) => {
                setNombres(e.target.value);
              }}
            />
          </div>
          <div className="input_user">
            {/* <img className="icons" src={UserIcon} alt="user" /> */}
            <input
              className="inputs"
              type="text"
              placeholder="Apellidos"
              onChange={(e) => {
                setApellidos(e.target.value);
              }}
            />
          </div>
          <div className="input_user">
            {/* <img className="icons" src={UserIcon} alt="user" /> */}
            <input
              className="inputs"
              type="text"
              placeholder="Correo"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input_user">
            {/* <img className="icons" src={UserIcon} alt="user" /> */}
            <input
              className="inputs"
              type="text"
              placeholder="Usuario"
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
            />
          </div>
          <div className="input_pass">
            {/* <img className="icons" src={PasswordIcon} alt="password" /> */}
            <input
              className="inputs"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            onClick={(e) => {
              handleRegister(e);
            }}
          >
            Guardar
          </button>
          <div className="w-full flex justify-end mr-5">
            <Link to={"/login"}>Login</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormularioRegistro;
