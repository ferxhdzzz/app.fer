import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../components/ButtonUser"; // 👈 corregido

export default function Home({ navigation }) {
  const irShowUsers = () => {
    navigation.navigate("ShowUser");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/yun.png")} style={styles.image} />
      <Text style={styles.title}>holahola</Text>
      <Text style={styles.subtitle}>
        este es un ejemplo de como conectar una aplicacion movil al backend
      </Text>

      <Button texto="Ver todos los usuarios" action={irShowUsers} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EFE6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#3B2F2F",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
    color: "#7D5A50",
  },
});
