import React, { useEffect, useState } from "react";
import FormularioLogin from "../components/FormularioLogin";
import '../styles/Login.css';

const Login = () => {

  return (
    <div className="main">
      <div className="card_main">
        <div className="cardinfo">
          <h1>Welcolme</h1>
          <h3>to the Website</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <FormularioLogin />
      </div>
    </div>
  );
};

export default Login;
