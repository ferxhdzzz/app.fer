import React from "react";
import BotonAccion from "./Boton";
import "./Card.css";

const Card = ({ nombre, apellido,cumpleaños, email, direccion, contratacion, contra,tel, dui,verificado, deleteEmployee, employee }) => {
  return (
    <div className="categoria-card">
    
      <h4>Nombre {nombre}</h4>
         <h5>Apellido {apellido}</h5>
           <h5>Cumpleaños {cumpleaños}</h5>
             <h5>Email {email}</h5>
               <h5>Direccion {direccion}</h5>
                 <h5>Contratacion {contratacion}</h5>
                   <h5>Contraseña {contra}</h5>
                    <h5>Telefono {tel}</h5>
                     <h5>Dui {dui}</h5>
                      <h5>Verificado {verificado}</h5>
                       
                   
      
      <div className="buttons">
        <br />
        <BotonAccion texto="Editar" onClick={() => (producto)} />
           <br />
            <br />
        <BotonAccion texto="Eliminar" onClick={() => deleteEmployee(employee._id)} />
      </div>
    </div>
  );
};

export default Card;