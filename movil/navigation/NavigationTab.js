import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Platform } from "react-native";

// Importando las pantallas
import Home from "../screens/Home";
import ShowUser from "../screens/Usuario";
import AddUser from "../screens/Agregar";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#AF8260", // íconos activos
        tabBarInactiveTintColor: "#B99873", // íconos inactivos
        tabBarStyle: {
          backgroundColor: "#FFF",
          height: Platform.OS === "ios" ? 80 : 60,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "ShowUser":
              iconName = focused ? "people" : "people-outline";
              break;
            case "AddUser":
              iconName = focused ? "person-add" : "person-add-outline";
              break;
          }

          return <Ionicons name={iconName} color={color} size={26} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: "Inicio" }} />
      <Tab.Screen
        name="ShowUser"
        component={ShowUser}
        options={{ title: "Usuarios" }}
      />
      <Tab.Screen
        name="AddUser"
        component={AddUser}
        options={{ title: "Agregar" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
