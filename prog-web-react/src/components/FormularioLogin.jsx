import React, { useState } from "react";
import UserIcon from '../assets/user.svg';
import PasswordIcon from '../assets/password.svg';
import ButtonLogin from './ButtonLogin'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

const FormularioLogin = () => {

  const [usuario, setUsuario] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();

  const inicioSesion = async (e)=>{
    e.preventDefault()
    console.log(" :", usuario)
    console.log("Password:", password)

    const data = {
      usuario: usuario,
      password: password
    }

    //Consumo de Servicio Login
    await axios.post("http://89.116.25.43:3500/api/login", data)
    .then((resp)=>{
      console.log(resp);
      localStorage.setItem("token", resp.data.jwt)
      localStorage.setItem("user", resp.data.user)
      localStorage.setItem("username", resp.data.user.usuario)
      navigate("/dashboard")
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  return (
      <form>
        <div className="cardform">
          <h4>USER LOGIN</h4>
          <div className="input_user">
            <img className="icons" src={UserIcon} alt="user" />
            <input className="inputs" type="text" placeholder="Username"
            onChange={(e)=>{setUsuario(e.target.value)}}
            />
          </div>
          <div className="input_pass">
            <img className="icons" src={PasswordIcon} alt="password" />
            <input className="inputs" type="password" placeholder="Password"
             onChange={(e)=>{setPasword(e.target.value)}}
             />
          </div>
          <ButtonLogin fnInicioSession={inicioSesion} label={"LOGIN"}/>
        </div>
      </form>
  );
};

export default FormularioLogin;
