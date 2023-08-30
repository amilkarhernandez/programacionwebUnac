import React from "react";

const ButtonLogin = ({fnInicioSession, label}) => {
  return (
    <button className="btn" onClick={fnInicioSession}>
      {label}
    </button>
  );
};

export default ButtonLogin;
