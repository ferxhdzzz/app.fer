import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ user, onEdit, onDelete }) => {
  if (!user) return null;

  return (
    <View style={styles.card}>
      {/* Información del usuario */}
      <View style={styles.userInfo}>
        

        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>
          {user.name} {user.lastName}
        </Text>

        <Text style={styles.label}>Correo:</Text>
        <Text style={styles.value}>{user.email || "Sin email"}</Text>

        <Text style={styles.label}>Cumpleaños:</Text>
        <Text style={styles.value}>{user.birthday || "No registrado"}</Text>

        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.value}>{user.telephone || "No registrado"}</Text>

        <Text style={styles.label}>DUI:</Text>
        <Text style={styles.value}>{user.dui || "No registrado"}</Text>
      </View>

      {/* Botones de acción */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onEdit && onEdit(user)}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete && onDelete(user._id)}
        >
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF", // Blanco
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    borderLeftWidth: 5,
    borderLeftColor: "#4F6D7A", // Azul suave
  },
  userInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#0A1F44", // Azul marino oscuro
    marginTop: 6,
  },
  value: {
    fontSize: 15,
    color: "#4A637D", // Gris azulado
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#D0DCE5", // línea sutil
  },
  editButton: {
    backgroundColor: "#0A1F44", // Azul marino
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#3E92CC", // Azul más claro (como alerta)
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Card;
