import React from 'react'
import '../styles/Login.css';
import FormularioRegistro from '../components/FormularioRegistro';

const Registro = () => {
  return (
    <div className="main">
      <div className="card_main">
        <div className="cardinfo">
          <h1>Registrate</h1>
          <h3>to the Website</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <FormularioRegistro />
      </div>
    </div>
  )
}

export default Registro
