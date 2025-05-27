import { useEffect, useState } from "react";



const useDataProductos = () => {

   
    const [id, setId] = useState("")
    const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
 const [productos, setProductos]=useState([])
     const API = "http://localhost:4000/api/products";


 
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:4000/api/products");
    if (!response.ok) {
      throw new Error("Hubo un error al obtener las categorías");
    }
    const data = await response.json();
    setProductos(data);
    
  
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);


  const agregarProd = async (e) => {
  e.preventDefault();

  const formCategorie = {
    name: name,
    description: description,
    price: price,
    stock: stock,
  };

  try {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formCategorie),
    });

    if (!response.ok) {
      const errorText = await response.text(); // <-- importante
      throw new Error(`Error al guardar el producto: ${errorText}`);
    }

    const data = await response.json();
    alert("Producto guardado");

    fetchProducts(); // <-- actualizar lista
    setName("");
    setDescription("");
    setPrice("");
    setStock("");

  } catch (error) {
    console.error("Error al agregar producto:", error);
  }
};





     const deleteProduct = async (id) => {
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Hubo un error al eliminar la marca");
        }

       alert("Producto eliminado");
        fetchProducts();


        
    };

      const updateProduct = async (dataProduct) => {
    setId(dataProduct._id);
    setName(dataProduct.name);
     setDescription(dataProduct.description);
      setPrice(dataProduct.price);
       setStock(dataProduct.stock);
        

    
    
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const editEmployee = {
        name: name,
        description: description,
         price: price,
        stock: stock,
        
      };
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editEmployee),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }

      const data = await response.json();
       alert("producto actualizado");
      setId("");
      setName("");
      setDescription("");
      setPrice("");
     setStock("");
      
    

    
      fetchProducts();
    } catch (error) {
      console.error("Error al editar la categoría:", error);
    }
  };

    return {
        name, setName,
        description, setDescription,
        price, setPrice,
        stock, setStock, 
        productos,setProductos, 
        agregarProd, deleteProduct,
        handleEdit, updateProduct,
         id, setId
}


 
};

export default useDataProductos;