import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import {useFonts} from 'expo-font';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import DaftarAntrian from './src/screens/DaftarAntrian';
import AntrianTeller from './src/screens/AntrianTeller';
import AntrianCS from './src/screens/AntrianCS';
import NoAntrianCS from './src/screens/NoAntrianCS';
import NoAntrianTeller from './src/screens/NoAntrianTeller';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="DaftarAntrian" component={DaftarAntrian} options={{ headerShown: false }}/>
        <Stack.Screen name="AntrianCS" component={AntrianCS} options={{ headerShown: false }}/>
        <Stack.Screen name="AntrianTeller" component={AntrianTeller} options={{ headerShown: false }}/>
        <Stack.Screen name="NoAntrianCS" component={NoAntrianCS} options={{ headerShown: false }}/>
        <Stack.Screen name="NoAntrianTeller" component={NoAntrianTeller} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
