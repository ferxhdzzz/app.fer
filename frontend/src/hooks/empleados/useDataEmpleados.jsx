import { useEffect, useState } from "react";



const useDataEmployees = () => {

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


    const agregarEmp = () => {
          

        const formCategorie = 
        {
        name: name,
        last: lastName,
         bithdaay: birthday,
        email: email,
         address: address,
        hire: hireDate,
         pass: password,
        phone: telephone,
         dui: dui,
        iss: issNumber,
         verified: isVerified,
      

        }
        

        const response = fetch("http://localhost:4000/api/employees",{
            method: "POST",
               headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formCategorie),
    });

    alert("empleado guardado")

fetchEmployees()



    }

      useEffect(() => {
        fetchEmployees();
    }, []);

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

        toast.success('Marca eliminada exitosamente');
        fetchEmployees();
    };

    return {
        name, setName,lastName, setLastName,birthday, setBirthday,email, setEmail,address, setAddress,hireDate, setHireDate,
  password, setPassword,telephone, setTelephone,dui, setDui,issNumber, setIssNumber,
    isVerified, setIsVerified, agregarEmp,employees, deleteEmployee
}


 
};

export default useDataEmployees;