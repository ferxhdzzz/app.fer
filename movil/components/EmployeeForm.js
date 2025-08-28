import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const EmployeeForm = ({ onSubmit, initialValues = {} }) => {
  const [form, setForm] = useState({
    name: initialValues.name || '',
    lastName: initialValues.lastName || '',
    birthday: initialValues.birthday || '',
    email: initialValues.email || '',
    address: initialValues.address || '',
    hireDate: initialValues.hireDate || '',
    password: initialValues.password || '',
    telephone: initialValues.telephone || '',
    dui: initialValues.dui || '',
    isssNumber: initialValues.isssNumber || '',
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  return (
    <ScrollView style={styles.container}>
      {Object.keys(form).map((key) => (
        <TextInput
          key={key}
          placeholder={key}
          style={styles.input}
          value={form[key]}
          onChangeText={(value) => handleChange(key, value)}
        />
      ))}
      <Button title="Guardar" onPress={() => onSubmit(form)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
    padding: 8,
    borderRadius: 4,
  },
});

export default EmployeeForm;
