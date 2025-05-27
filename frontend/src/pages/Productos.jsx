import React from "react";
import Prod from "../components/CardProd";
import Agregarprod from "../components/AgregarProd";
import "./Empleados.css";
import useDataProductos from "../hooks/productos/useDataProductos";

const categorias = [
  { nombre: "Gatos", imagen: "/gato.png" },
  { nombre: "Roedores", imagen: "/conejo.png" },
  { nombre: "Caninos", imagen: "/caninos.png" },
  { nombre: "Reptiles", imagen: "/reptiles.png" },
  { nombre: "Aves", imagen: "/aves.png" }
];

const Productos = () => {


const {     name, setName,
        description, setDescription,
        price, setPrice,
        stock, setStock, 
        productos,setProductos, 
        agregarProd, deleteProduct,
        handleEdit, updateProduct,
         id, setId }=  useDataProductos()


  return (
    <div className="categorias-page">
      <div className="grid-categorias">
        {productos.map((prod, i) => (
          <Prod
            key={i}
            productos={prod}
            
             deleteProduct={deleteProduct}
            handleEdit={handleEdit}
             updateProduct={updateProduct}
          
           
            
          />
        ))}
      </div>
      <Agregarprod 
      id={id}
      name={name}
     setName={setName}
       description={description}
      setDescription={setDescription}
      price={price}
       setPrice={setPrice}
      stock={stock}
       setStock={setStock}
     
      agregarProd={agregarProd}
          handleEdit={handleEdit}
           

      />

     
    </div>

    
  );
};

export default Productos;