import React from "react";
import BotonAccion from "./Boton";
import "./Card.css";

const Card = ({ employees, deleteEmployee, updateEmployee }) => {
  if (!employees) return null;

  const {
    _id,
    name,
    lastName,
    birthday,
    email,
    address,
    hireDate,
    password,
    telephone,
    dui,
    isVerified
  } = employees;

  return (
    <div className="categoria-card">
      <h4>Nombre: {name}</h4>
      <h5>Apellido: {lastName}</h5>
      <h5>Cumpleaños: {birthday}</h5>
      <h5>Email: {email}</h5>
      <h5>Dirección: {address}</h5>
      <h5>Contratación: {hireDate}</h5>
      <h5>Contraseña: {password}</h5>
      <h5>Teléfono: {telephone}</h5>
      <h5>DUI: {dui}</h5>
      <h5>Verificado: {isVerified ? "Sí" : "No"}</h5>

      <div className="buttons">
        <br />
        <BotonAccion texto="Editar" onClick={() => updateEmployee(employees)} />
        <br />
        <br />
        <BotonAccion texto="Eliminar" onClick={() => deleteEmployee(_id)} />
      </div>
    </div>
  );
};

export default Card;
