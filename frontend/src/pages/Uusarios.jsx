import React from "react";
import Cus from "../components/CardCus";
import Agregarcus from "../components/AgregarCus";
import "./Empleados.css";
import useDataCustomers from "../hooks/clientes/useDataUsuarios";

const categorias = [
  { nombre: "Gatos", imagen: "/gato.png" },
  { nombre: "Roedores", imagen: "/conejo.png" },
  { nombre: "Caninos", imagen: "/caninos.png" },
  { nombre: "Reptiles", imagen: "/reptiles.png" },
  { nombre: "Aves", imagen: "/aves.png" }
];

const Customers = () => {


const {   name,
    setName,
    lastName,
    setLastName,
    birthday,
    setBirthday,
    email,
    setEmail,
    password,
    setPassword,
    telephone,
    setTelephone,
    dui,
    setDui,
    isVerified,
    setIsVerified,
    agregarCus,
    customers,
    deleteCustomer,
    updateCustomer,
    handleEdit,
    id,
    setId,}=  useDataCustomers()
  return (
    <div className="categorias-page">
      <div className="grid-categorias">
        {customers.map((cus, i) => (
          <Cus
            key={i}
            id={cus.id}
            nombre={cus.name}
            apellido={cus.lastName}
            cumpleaños={cus.birthday}
            email={cus.email}
            contra={cus.password}
            tel={cus.telephone}
            dui={cus.dui}
            verificado={cus.isVerified}
            
             deleteCustomer={deleteCustomer}
            handleEdit={handleEdit}
             updateCustomer={updateCustomer}
             customers={cus}
           
            
          />
        ))}
      </div>
      <Agregarcus 
      id={id}
        setId={setId}
      name={name}
     setName={setName}
       lastName={lastName}
      setLastName={setLastName}
      birthday={birthday}
       setBirthday={setBirthday}
      email={email}
       setEmail={setEmail}
        password={password}
      setPassword={setPassword}
      telephone={telephone}
        setTelephone={setTelephone}
        dui={dui}
        setDui={setDui}
        isVerified={isVerified}
      setIsVerified={setIsVerified}
      agregarCus={agregarCus}
          handleEdit={handleEdit}
             updateCustomer={updateCustomer}
              

      />

     
    </div>

    
  );
};

export default Customers;