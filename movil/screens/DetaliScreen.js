import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import EmployeeForm from '../components/EmployeeForm';
import { getEmployeeById, updateEmployee, deleteEmployee } from '../services/api';

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    getEmployeeById(id).then(setEmployee);
  }, []);

  const handleUpdate = async (data) => {
    await updateEmployee(id, data);
    navigation.goBack();
  };

  const handleDelete = async () => {
    await deleteEmployee(id);
    navigation.goBack();
  };

  if (!employee) return <Text>Cargando...</Text>;

  return (
    <View>
      <EmployeeForm onSubmit={handleUpdate} initialValues={employee} />
      <Button title="Eliminar" color="red" onPress={handleDelete} />
    </View>
  );
};

export default DetailScreen;
