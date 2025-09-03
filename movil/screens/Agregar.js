import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../components/Button"; // Usa tu botón genérico
import useFetchUser from "../hooks/useFetch";

const AddUser = () => {
  const {
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
    handleGuardar,
  } = useFetchUser();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Agregar Usuario</Text>
          <Text style={styles.subtitle}>
            Ingresa la información del nuevo usuario
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#A1866F"
          />

          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={lastName}
            onChangeText={setLastName}
            placeholderTextColor="#A1866F"
          />

          <TextInput
            style={styles.input}
            placeholder="Fecha de nacimiento (YYYY-MM-DD)"
            value={birthday}
            onChangeText={setBirthday}
            placeholderTextColor="#A1866F"
          />

          <TextInput
            style={styles.input}
            placeholder="Correo"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#A1866F"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#A1866F"
          />

          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={telephone}
            onChangeText={setTelephone}
            keyboardType="phone-pad"
            placeholderTextColor="#A1866F"
          />

          <TextInput
            style={styles.input}
            placeholder="DUI"
            value={dui}
            onChangeText={setDui}
            keyboardType="numeric"
            placeholderTextColor="#A1866F"
          />

          <View style={styles.buttonWrapper}>
            <Button texto="Guardar" action={handleGuardar} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EAD8C0",
    padding: 20,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#5C3D2E",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#5C3D2E",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#5C3D2E",
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    backgroundColor: "#FFF",
    color: "#000",
  },
  buttonWrapper: {
    marginTop: 30,
    alignItems: "center",
  },
});

export default AddUser;
