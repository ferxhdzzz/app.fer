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
import Button from "../components/ButtonUser";
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
          <Text style={styles.title}>agregar usuario</Text>
          <Text style={styles.subtitle}>
            ingresa la información del usuario
          </Text>

          <View style={styles.field}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#AAB2C8"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Apellido</Text>
            <TextInput
              style={styles.input}
              placeholder="Apellido"
              value={lastName}
              onChangeText={setLastName}
              placeholderTextColor="#AAB2C8"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Fecha de nacimiento</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={birthday}
              onChangeText={setBirthday}
              placeholderTextColor="#AAB2C8"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              placeholder="Correo"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholderTextColor="#AAB2C8"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#AAB2C8"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Teléfono</Text>
            <TextInput
              style={styles.input}
              placeholder="Teléfono"
              value={telephone}
              onChangeText={setTelephone}
              keyboardType="phone-pad"
              placeholderTextColor="#AAB2C8"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>DUI</Text>
            <TextInput
              style={styles.input}
              placeholder="DUI"
              value={dui}
              onChangeText={setDui}
              keyboardType="numeric"
              placeholderTextColor="#AAB2C8"
            />
          </View>

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
    backgroundColor: "#0A1F44",
    padding: 20,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#AAB2C8",
  },
  field: {
    marginBottom: 16,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#AAB2C8",
    borderRadius: 10,
    padding: 14,
    backgroundColor: "#13294B",
    color: "#FFFFFF",
  },
  buttonWrapper: {
    marginTop: 30,
    alignItems: "center",
  },
});

export default AddUser;
