import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ user, onEdit, onDelete }) => {
  if (!user) return null;

  return (
    <View style={styles.card}>
      {/* Información del usuario */}
      <View style={styles.userInfo}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{user._id || "Sin ID"}</Text>

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
    backgroundColor: "#FFF5F2", // tono beige/rosado suave
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: "#5C3D2E",
  },
  userInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#5C3D2E",
    marginTop: 5,
  },
  value: {
    fontSize: 16,
    color: "#3B2F2F",
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0CFC0",
  },
  editButton: {
    backgroundColor: "#5C3D2E",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#D66A6A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;
