import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import {useFonts} from 'expo-font';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import GameScreen from './src/screens/GameScreen';
import Leaderboard  from './src/screens/Leaderboard';
import WelcomeScreen from './src/screens/WelcomeScreen';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerLeft: null }}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="Game" component={GameScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
