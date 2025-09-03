import { useState, useEffect } from "react";
import { Alert } from "react-native";

const API_URL = "http://192.168.56.1:4000/api/customers";


const useFetchUser = () => {
  // Estados del formulario
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");

  // Estados para edición
  const [editandoId, setEditandoId] = useState(null);

  // Estados para la lista de usuarios
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener usuarios desde la API
  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        credentials: "include", // si usas sesiones/cookies
      });
      const data = await response.json();
      setUsuarios(data);
      console.log("Usuarios cargados:", data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
      Alert.alert("Error", "No se pudieron cargar los usuarios");
    } finally {
      setLoading(false);
    }
  };

  // Guardar nuevo usuario
  const handleGuardar = async () => {
    if (!name || !lastName || !birthday || !email || !password || !telephone || !dui) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name,
          lastName,
          birthday,
          email,
          password,
          telephone,
          dui,
        }),
      });

      if (response.ok) {
        Alert.alert("Éxito", "Usuario guardado correctamente");
        limpiarFormulario();
        fetchUsuarios();
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        Alert.alert("Error", "No se pudo guardar el usuario");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Ocurrió un error al enviar los datos");
    }
  };

  // Eliminar usuario
  const handleEliminar = async (id) => {
    Alert.alert("Confirmar eliminación", "¿Seguro deseas eliminar este usuario?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          try {
            const response = await fetch(`${API_URL}/${id}`, {
              method: "DELETE",
              credentials: "include",
            });

            if (response.ok) {
              Alert.alert("Éxito", "Usuario eliminado correctamente");
              fetchUsuarios();
            } else {
              const errorText = await response.text();
              console.error("Error response:", errorText);
              Alert.alert("Error", "No se pudo eliminar el usuario");
            }
          } catch (error) {
            console.error("Error al eliminar:", error);
            Alert.alert("Error", "Ocurrió un error al eliminar el usuario");
          }
        },
      },
    ]);
  };

  // Iniciar edición
  const handleIniciarEdicion = (usuario) => {
    setEditandoId(usuario._id);
    setName(usuario.name || "");
    setLastName(usuario.lastName || "");
    setBirthday(usuario.birthday || "");
    setEmail(usuario.email || "");
    setPassword(""); // no editamos contraseña directamente
    setTelephone(usuario.telephone || "");
    setDui(usuario.dui || "");
  };

  // Actualizar usuario
  const handleActualizar = async () => {
    if (!name || !lastName || !birthday || !email || !telephone || !dui) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${editandoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name,
          lastName,
          birthday,
          email,
          telephone,
          dui,
        }),
      });

      if (response.ok) {
        Alert.alert("Éxito", "Usuario actualizado correctamente");
        limpiarFormulario();
        setEditandoId(null);
        fetchUsuarios();
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        Alert.alert("Error", "No se pudo actualizar el usuario");
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
      Alert.alert("Error", "Ocurrió un error al actualizar los datos");
    }
  };

  // Cancelar edición
  const handleCancelarEdicion = () => {
    limpiarFormulario();
    setEditandoId(null);
  };

  // Función para limpiar formulario
  const limpiarFormulario = () => {
    setName("");
    setLastName("");
    setBirthday("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

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
    usuarios,
    loading,
    editandoId,
    handleGuardar,
    handleEliminar,
    handleIniciarEdicion,
    handleActualizar,
    handleCancelarEdicion,
    fetchUsuarios,
  };
};

export default useFetchUser;
