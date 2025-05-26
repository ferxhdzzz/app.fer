import React from "react";
import "./AgregarCard.css";

const AgregarCard = ({ onSubmit, onImageChange,    name, setName,lastName, setLastName,birthday, setBirthday,email, setEmail,address, setAddress,hireDate, setHireDate,
  password, setPassword,telephone, setTelephone,dui, setDui,issNumber, setIssNumber,
    isVerified, setIsVerified, agregarEmp
}) => {

const handleSave= () => {
 
      agregarEmp()


  }


  return (
    <div className="form-categoria">
      <h3>Agregar Empleado</h3>

      
      <br />
      <label >Nombre: </label>
      <input type="text" placeholder="" 
      value={name}
      onChange={(e)=> setName(e.target.value)}/>

      <label >Apellido: {lastName}</label>
      <input type="text" placeholder="" 
      value={lastName}
      onChange={(e)=> setLastName(e.target.value)}/>

      <label >Cumpleaños: </label>
      <input type="date" placeholder="" 
      value={birthday}
      onChange={(e)=> setBirthday(e.target.value)}/>


      <label >Email: </label>
      <input type="text" placeholder="" 
      value={email}
      onChange={(e)=> setEmail(e.target.value)}/>

      <label >Direccion: </label>
      <input type="text" placeholder="" 
      value={address}
      onChange={(e)=> setAddress(e.target.value)}/>
      
      <label >Fecha de contratacion: </label>
      <input type="date" placeholder="" 
      value={hireDate}
      onChange={(e)=> setHireDate(e.target.value)}/>
      
      <label >Contraseña: </label>
      <input type="password" placeholder="" 
      value={password}
      onChange={(e)=> setPassword(e.target.value)}/>
      
      <label >telefono: </label>
      <input type="text" placeholder="" 
      value={telephone}
      onChange={(e)=> setTelephone(e.target.value)}/>

      
      <label >Dui: </label>
      <input type="text" placeholder="" 
      value={dui}
      onChange={(e)=> setDui(e.target.value)}/>
      
        <label >Numero iss: </label>
      <input type="text" placeholder="" 
      value={issNumber}
      onChange={(e)=> setIssNumber(e.target.value)}/>

      <label >Verificado: </label>
      <input type="text" placeholder="" 
      value={isVerified}
      onChange={(e)=> setIsVerified(e.target.value)}/>

      <br /><br />
      
      <br /><br />
      <button className="btn-agregar" onClick={handleSave}>Agregar</button>
    </div>
  );
};

export default AgregarCard;
