import React from "react";

const ButtonLogin = ({fnInicioSession, label}) => {
  return (
    <button className="btn btn-primary btn-sm" onClick={fnInicioSession}>
      {label}
    </button>
  );
};

export default ButtonLogin;
