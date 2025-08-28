import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateEmployee';
import DetailScreen from '../screens/DetaliScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Crear" component={CreateScreen} />
      <Stack.Screen name="Detalle" component={DetailScreen} />
    </Stack.Navigator>
  );
}
