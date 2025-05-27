import React from "react";
import BotonAccion from "./Boton"; // Asegúrate de que existe este componente
import "./Card.css"; // Asegúrate de que el CSS esté bien enlazado

const Card = ({ customers, deleteCustomer, updateCustomer }) => {

  const {
    id
  } = customers;

  return (
    <div className="categoria-card">
      <h4>Nombre: {customers.name}</h4>
      <h5>Apellido: {customers.lastName}</h5>
      <h5>Cumpleaños: {customers.birthday}</h5>
      <h5>Email: {customers.email}</h5>
      <h5>Contraseña: {customers.password}</h5>
      <h5>Teléfono: {customers.telephone}</h5>
      <h5>DUI: {customers.dui}</h5>
      <h5>Verificado: {customers.isVerified ? "Sí" : "No"}</h5>

      <div className="buttons">
        <br />
        <BotonAccion texto="Editar" onClick={() => updateCustomer(customers)} />
          <br /><br />
        <BotonAccion texto="Eliminar" onClick={() => deleteCustomer(id)} />
      </div>
    </div>
  );
};

export default Card;