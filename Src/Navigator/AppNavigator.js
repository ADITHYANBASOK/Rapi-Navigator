import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import SecondScreen from "../Screens/SecondScreen";

const StackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{headerShown:false}}>
        <StackNavigator.Screen name="Home" component={Home} />
        <StackNavigator.Screen name="SecondScreen" component={SecondScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
