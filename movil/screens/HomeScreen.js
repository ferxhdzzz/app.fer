import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import useFetch from '../hooks/useFetch';

const HomeScreen = ({ navigation }) => {
  const { data, loading, error, refetch } = useFetch('http://192.168.56.1:3000/api/employees');

  if (loading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Button title="Agregar empleado" onPress={() => navigation.navigate('Crear')} />
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalle', { id: item._id })}>
            <Text>{item.name} {item.lastName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
