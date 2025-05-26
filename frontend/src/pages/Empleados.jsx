import React from "react";
import Emp from "../components/Card";
import Agregaremp from "../components/AgregarCard";
import "./Empleados.css";
import useDataEmployees from "../hooks/empleados/useDataEmpleados";

const categorias = [
  { nombre: "Gatos", imagen: "/gato.png" },
  { nombre: "Roedores", imagen: "/conejo.png" },
  { nombre: "Caninos", imagen: "/caninos.png" },
  { nombre: "Reptiles", imagen: "/reptiles.png" },
  { nombre: "Aves", imagen: "/aves.png" }
];

const Empleados = () => {


const {name, setName,lastName, setLastName,birthday, setBirthday,email, setEmail,address, setAddress,hireDate, setHireDate,
  password, setPassword,telephone, setTelephone,dui, setDui,issNumber, setIssNumber,
    isVerified, setIsVerified, agregarEmp,employees, deleteEmployee}=  useDataEmployees()
  return (
    <div className="categorias-page">
      <div className="grid-categorias">
        {employees.map((emp, i) => (
          <Emp
            key={i}
            nombre={emp.name}
            apellido={emp.lastName}
            cumpleaños={emp.birthday}
            email={emp.email}
            direccion={emp.address}
            contratacion={emp.hireDate}
            contra={emp.password}
            tel={emp.telephone}
            dui={emp.dui}
            verificado={emp.isVerified}
             deleteEmployee={deleteEmployee}
           
            on={() => alert("Editar " + emp.name)}
           // deleteEmployee={() => alert("Eliminar " + emp.name)}
          />
        ))}
      </div>
      <Agregaremp 
      name={name}
     setName={setName}
       lastName={lastName}
      setLastName={setLastName}
      birthday={birthday}
       setBirthday={setBirthday}
      email={email}
       setEmail={setEmail}
      address={address}
       setAddress={setAddress}
      hireDate={hireDate}
       setHireDate={setHireDate}
        password={password}
      setPassword={setPassword}
      telephone={telephone}
        setTelephone={setTelephone}
        dui={dui}
        setDui={setDui}
      issNumber={issNumber}
        setIssNumber={setIssNumber}
        isVerified={isVerified}
      setIsVerified={setIsVerified}
      agregarEmp={agregarEmp}

      />
    </div>
  );
};

export default Empleados;