import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import Swal from "sweetalert2";

const ModalUsers = ({ show, handleClose, user, getUser }) => {
    const token = localStorage.getItem("token");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");

  const handleActualizar = async() =>{

    const formData = {
        id: user._id,
        nombres: nombres,
        apellidos: apellidos, 
        email: email, 
        usuario: usuario
    }
    
    await axios.put("http://89.116.25.43:3500/api/usuarios/update", formData, {
        headers: { Authorization: `bearer ${token}` },
      })
    .then((resp)=>{
        console.log(resp)
        Swal.fire("Información!", "Acrualizado Correctamente!", "success");
        getUser();
        handleClose();
    })
    .catch((err)=>{
        console.log(err)
        if(err.response.status == 400){
            Swal.fire("Información!", err.response.data.message, "error");
        }else{
            Swal.fire("Información!", "Ocurrio un error!", "error");
        }
    })

}

useEffect (()=>{
  if(user._id){
    setNombres(user.nombres)
    setApellidos(user.apellidos)
    setEmail(user.email)
    setUsuario(user.usuario)
  }else{
    setNombres("")
    setApellidos("")
    setEmail("")
    setUsuario("")
  } 
},[show])

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label className="form-label">
              Nombres
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setNombres(e.target.value);
              }}
              value={nombres}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setApellidos(e.target.value);
              }}
              value={apellidos}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
              value={usuario}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleActualizar}>
          Actualizar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUsers;
