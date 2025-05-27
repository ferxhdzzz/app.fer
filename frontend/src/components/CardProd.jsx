import React from "react";
import BotonAccion from "./Boton";
import "./Card.css";
 
 
const Card = ({ productos, deleteProduct, updateProduct }) => {
   
  const {
    id
  } = productos;
  return (
    <div className="categoria-card">
      <h4>Nombre: {productos.name}</h4>
      <h5>descripcion: {productos.description}</h5>
      <h5>price: {productos.price}</h5>
      <h5>stock: {productos.stock}</h5>
     
 
      <div className="buttons">
        <br />
        <BotonAccion texto="Editar" onClick={() => updateProduct(productos)} />
        <br />
        <br />
        <BotonAccion texto="Eliminar" onClick={() => deleteProduct(id)} />
      </div>
    </div>
  );
};
 
export default Card;
 