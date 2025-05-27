import { useEffect, useState } from "react";



const useDataEmployees = () => {

    const [id, setId] = useState("")
    const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [password, setPassword] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dui, setDui] = useState("");
      const [issNumber, setIssNumber] = useState("");
  const [isVerified, setIsVerified] = useState("");
 const [employees, setEmployees]=useState([])
     const API = "http://localhost:4000/api/employees";


 
  const fetchEmployees = async () => {
    const response = await fetch("http://localhost:4000/api/employees");
    if (!response.ok) {
      throw new Error("Hubo un error al obtener las categorías");
    }
    const data = await response.json();
    setEmployees(data);

  
  };
 useEffect(() => {
    fetchEmployees();
  }, []);


const agregarEmp = async () => {
  const formEmployee = {
    name: name,
    lastName: lastName,
    birthday: birthday,        // ← cuidado con los nombres mal escritos
    email: email,
    address: address,
    hireDate: hireDate,
    password: password,
    telephone: telephone,
    dui: dui,
    issNumber: issNumber,
    isVerified: isVerified,
  };

  try {
    const response = await fetch("http://localhost:4000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEmployee),
    });

    if (!response.ok) {
      throw new Error("Error al guardar el empleado");
    }

    alert("Empleado guardado");
    fetchEmployees(); // ← si esta función es async, también deberías usar await

  } catch (error) {
    console.error("Error al guardar el empleado:", error);
  }
};

     const deleteEmployee = async (id) => {
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Hubo un error al eliminar la marca");
        }

       alert("empleado eliminado");
        fetchEmployees();
    };

      const updateEmployees = async (dataEmployee) => {
     
            setId(dataEmployee._id);
    setName(dataEmployee.name);
     setLastName(dataEmployee.lastName);
      setBirthday(dataEmployee.birthday);
       setEmail(dataEmployee.email);
        setAddress(dataEmployee.address);
         setHireDate(dataEmployee.hireDate);
          setPassword(dataEmployee.password);
 setTelephone(dataEmployee.telephone);
 setDui(dataEmployee.dui);
 setIssNumber(dataEmployee.issNumber);
 setIsVerified(dataEmployee.isVerified);

    
    
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const editEmployee = {
        name: name,
        lastName: lastName,
         bithday: birthday,
        email: email,
         address: address,
        hire: hireDate,
         pass: password,
        phone: telephone,
         dui: dui,
        iss: issNumber,
         verified: isVerified,
      };
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editEmployee),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la categoría");
      }

      const data = await response.json();
       alert("empleado actualizado");
      setId("");
      setName("");
      setLastName("");
      setBirthday("");
     setEmail("");
      setAddress("");
      setHireDate("");
      setPassword("");
      setTelephone("");
      setDui("");
      setIssNumber("");
      setIsVerified("");
      ;

     
      fetchEmployees();
    } catch (error) {
      console.error("Error al editar la categoría:", error);
    }
  };

    return {
        name, setName,lastName, setLastName,birthday, setBirthday,email, setEmail,address, setAddress,hireDate, setHireDate,
  password, setPassword,telephone, setTelephone,dui, setDui,issNumber, setIssNumber,
    isVerified, setIsVerified, agregarEmp,employees, deleteEmployee,handleEdit, updateEmployees, id, setId
}


 
};

export default useDataEmployees;