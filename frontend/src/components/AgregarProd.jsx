import React from "react";
import "./AgregarCard.css";

const AgregarCard = ({   name, setName,
        description, setDescription,
        price, setPrice,
        stock, setStock,  
        agregarProd, 
        handleEdit, 
         id, 
         


}) => {


  return (
    <div className="form-categoria">
      <h3>Agregar producto</h3>

      
      <br />
      <label >Nombre: </label>
      <input type="text" placeholder="" 
      value={name || ""}
      onChange={(e)=> setName(e.target.value)}/>

      <label >Descripcion: </label>
      <input type="text" placeholder="" 
      value={description || ""}
      onChange={(e)=> setDescription(e.target.value)}/>

      <label >Precio: </label>
      <input type="text" placeholder="" 
      value={price || ""}
      onChange={(e)=> setPrice(e.target.value)}/>


      <label >Stock: </label>
      <input type="text" placeholder="" 
      value={stock || ""}
      onChange={(e)=> setStock(e.target.value)}/>

      <br /><br />
      
      <br /><br />
{!id ? (
          <button
            type="submit"
            className="btn-agregar"
            onClick={(e) => agregarProd(e)}
          >
            Guardar
          </button>
        ) : (
          <button
            type="submit"
            className="btn-agregar"
            onClick={(e) => handleEdit(e)}
          >
            Editar
          </button>
           )}

           
    </div>
    
  );
};

export default AgregarCard;
