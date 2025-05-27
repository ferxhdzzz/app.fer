import React from "react";
import "./AgregarCard.css";

const AgregarCard = ({  name, setName,lastName, setLastName,birthday, setBirthday,email, setEmail,
  password, setPassword,telephone, setTelephone,dui, setDui, isVerified, setIsVerified, agregarCus, handleEdit, id
}) => {


  return (
    <div className="form-categoria">
      <h3>Agregar Cliente</h3>

      
      <br />
      <label >Nombre: </label>
      <input type="text" placeholder="" 
      value={name || ""}
      onChange={(e)=> setName(e.target.value)}/>

      <label >Apellido:</label>
      <input type="text" placeholder="" 
      value={lastName || ""}
      onChange={(e)=> setLastName(e.target.value)}/>

      <label >Cumpleaños: </label>
      <input type="date" placeholder="" 
      value={birthday || ""}
      onChange={(e)=> setBirthday(e.target.value)}/>


      <label >Email: </label>
      <input type="text" placeholder="" 
      value={email || ""}
      onChange={(e)=> setEmail(e.target.value)}/>

      
      
      <label >Contraseña: </label>
      <input type="password" placeholder="" 
      value={password || ""}
      onChange={(e)=> setPassword(e.target.value)}/>
      
      <label >telefono: </label>
      <input type="text" placeholder="" 
      value={telephone || ""}
      onChange={(e)=> setTelephone(e.target.value)}/>

      
      <label >Dui: </label>
      <input type="text" placeholder="" 
      value={dui || ""}
      onChange={(e)=> setDui(e.target.value)}/>
      
    
      <label >Verificado: </label>
      <input type="text" placeholder="" 
      value={isVerified || ""}
      onChange={(e)=> setIsVerified(e.target.value)}/>

      <br /><br />
      
      <br /><br />
{!id ? (
          <button
            type="submit"
            className="btn-agregar"
            onClick={(e) => agregarCus(e)}
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
