import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Alert,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Componente de la card
import CardUser from "../components/Card";

import useFetchUser from "../hooks/useFetch";
import { useFocusEffect } from "@react-navigation/native";

const ShowUser = () => {
  const {
    usuarios,
    loading,
    fetchUsuarios,
    handleEliminar,
    handleIniciarEdicion,
    handleActualizar,
    editandoId,
    name,
    setName,
    lastName,
    setLastName,
    birthday,
    setBirthday,
    email,
    setEmail,
    telephone,
    setTelephone,
    dui,
    setDui,
    handleCancelarEdicion,
  } = useFetchUser();

  // Modal de edición
  const [modalVisible, setModalVisible] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Se ejecuta al enfocar la pantalla
  useFocusEffect(
    useCallback(() => {
      fetchUsuarios();
    }, [])
  );

  // Abrir modal de edición
  const handleEditUser = (user) => {
    handleIniciarEdicion(user);
    setModalVisible(true);
  };

  // Actualizar usuario
  const updateUser = async () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Error", "Nombre y correo son obligatorios");
      return;
    }

    setUpdating(true);
    try {
      await handleActualizar();
      setModalVisible(false);
      handleCancelarEdicion();
    } catch (error) {
      Alert.alert("Error", `Ocurrió un error: ${error.message}`);
    } finally {
      setUpdating(false);
    }
  };

  // Cerrar modal
  const closeModal = () => {
    setModalVisible(false);
    handleCancelarEdicion();
  };

  // Eliminar usuario
  const handleDeleteUser = (userId) => {
    setDeleting(true);
    handleEliminar(userId).finally(() => setDeleting(false));
  };

  // Renderizar cada usuario
  const renderUserItem = ({ item }) => (
    <CardUser
      user={item}
      onEdit={() => handleEditUser(item)}
      onDelete={() => handleDeleteUser(item._id)}
    />
  );

  // Contenido principal
  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#5C3D2E" />
          <Text style={styles.loadingText}>Cargando usuarios...</Text>
        </View>
      );
    }

    if (!usuarios || usuarios.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No hay usuarios registrados</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchUsuarios}>
            <Text style={styles.retryButtonText}>Recargar</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <FlatList
        data={usuarios}
        keyExtractor={(user, index) => user._id?.toString() || `user-${index}`}
        renderItem={renderUserItem}
        contentContainerStyle={styles.listContainer}
        onRefresh={fetchUsuarios}
        refreshing={loading}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>lista de usuarios registrados</Text>

    
      {renderContent()}

      {deleting && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#5C3D2E" />
          <Text style={styles.overlayText}>Eliminando usuario...</Text>
        </View>
      )}

      {/* Modal de edición */}
      <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Usuario</Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Apellido"
              value={lastName}
              onChangeText={setLastName}
            />

            <TextInput
              style={styles.input}
              placeholder="Correo"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Fecha de nacimiento"
              value={birthday}
              onChangeText={setBirthday}
            />

            <TextInput
              style={styles.input}
              placeholder="Teléfono"
              value={telephone}
              onChangeText={setTelephone}
              keyboardType="phone-pad"
            />

            <TextInput
              style={styles.input}
              placeholder="DUI"
              value={dui}
              onChangeText={setDui}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={closeModal} disabled={updating}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.saveButton, updating && styles.disabledButton]}
                onPress={updateUser}
                disabled={updating}
              >
                {updating ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.buttonText}>Guardar</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1F44", // Azul marino de fondo
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  listContainer: {
    paddingBottom: 30,
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#AAB2C8", // Gris azulado
    textAlign: "center",
    marginBottom: 10,
  },
  counterText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#B0C4DE", // Azul claro
    textAlign: "center",
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  loadingText: {
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#3E92CC", // Azul claro
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    maxHeight: "85%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0A1F44", // Azul marino
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D0DCE5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#F5F9FC", // Blanco azulado
    color: "#0A1F44",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#AAB2C8", // Gris azulado
  },
  saveButton: {
    backgroundColor: "#0A1F44", // Azul marino
  },
  disabledButton: {
    backgroundColor: "#7C8CA0", // Gris apagado
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ShowUser;
