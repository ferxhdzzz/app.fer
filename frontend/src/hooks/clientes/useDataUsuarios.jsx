import { useEffect, useState } from "react";

const useDataCustomers = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");
  const [isVerified, setIsVerified] = useState("");
  const [customers, setCustomers] = useState([]);

  const API = "http://localhost:4000/api/customers";

  const fetchCustomers = async () => {
   
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Hubo un error al obtener los clientes");
      }
      const data = await response.json();
      setCustomers(data);
     
    
  };

    useEffect(() => {
    fetchCustomers();
  }, []);

 const agregarCus = async (e) => {
  e.preventDefault();
  const formCustomer = {
    name,
    lastName,
    birthday,
    email,
    password,
    telephone,
    dui,
    isVerified,
  };

  try {
    const response = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formCustomer),
    });

    if (!response.ok) {
      throw new Error("Error al guardar el cliente");
    }

    await fetchCustomers(); // ✅ recarga la lista correctamente
    alert("Cliente guardado");

    // Limpieza de inputs
    setName("");
    setLastName("");
    setBirthday("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
    setIsVerified("");

  } catch (error) {
    console.error("Error al agregar cliente:", error);
  }
};

  const deleteCustomer = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Hubo un error al eliminar el cliente");
      }
alert("cliente eliminado");
    fetchCustomers();

  
  
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
    }
  };

  const updateCustomer = (dataCustomer) => {
    setId(dataCustomer._id);
    setName(dataCustomer.name);
    setLastName(dataCustomer.lastName);
    setBirthday(dataCustomer.birthday);
    setEmail(dataCustomer.email);
    setPassword(dataCustomer.password);
    setTelephone(dataCustomer.telephone);
    setDui(dataCustomer.dui);
    setIsVerified(dataCustomer.isVerified);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const editCustomer = {
     name:name,
      lastName: lastName,
      birthday: birthday,
      email: email,
      password: password,
      telephone: telephone,
      dui: dui,
      isVerified: isVerified,
    };

    try {
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editCustomer),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el cliente");
      }

      alert("Cliente actualizado");
      setId("");
      setName("");
      setLastName("");
      setBirthday("");
      setEmail("");
      setPassword("");
      setTelephone("");
      setDui("");
      setIsVerified("");
      fetchCustomers();
    } catch (error) {
      console.error("Error al editar cliente:", error);
    }
  };



  return {
    name,
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
    setId,
  };
};

export default useDataCustomers;
