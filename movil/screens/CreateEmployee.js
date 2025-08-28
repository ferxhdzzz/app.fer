import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import { createEmployee } from '../services/api';

const CreateScreen = ({ navigation }) => {
  const handleCreate = async (data) => {
    await createEmployee(data);
    navigation.goBack();
  };

  return <EmployeeForm onSubmit={handleCreate} />;
};

export default CreateScreen;
