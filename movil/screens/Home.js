import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../components/ButtonUser";

export default function Home({ navigation }) {
  const irShowUsers = () => {
    navigation.navigate("ShowUser");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/yun.png")} style={styles.image} />
      <Text style={styles.title}>Holaaa</Text>
      <Text style={styles.subtitle}>
        Este es un ejemplo de cómo conectar una aplicación móvil al backend.
      </Text>

      <Button texto="Ver todos los usuarios" action={irShowUsers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1F44", // Azul marino
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 30,
    borderRadius: 70, // Mitad del tamaño para hacerlo redondo
    borderWidth: 2,
    borderColor: "#FFFFFF", // Opcional: borde blanco para un look más limpio
  }
  ,
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#FFFFFF", // Blanco
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 30,
    color: "#AAB2C8", // Gris claro
  },
});
