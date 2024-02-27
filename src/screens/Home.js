import { StyleSheet, Text, TouchableOpacity, View, Image, Button, TextInput } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';


const HomeScreen = ({navigation}) => {
const Background = require("../assets/bg.png");
    
  return (
    <ImageBackground source={require('../assets/bg.png')} // Replace with the path to your image
    style={styles.backgroundGradient}>

    
    <View style={styles.container}>
      <Text style={styles.hiText}>Selamat Datang di Layanan Booking Antrean{'\n'}</Text>
  
      <TouchableOpacity style={styles.logButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
    </ImageBackground>
  );

};


export default HomeScreen;

const styles = StyleSheet.create({
    backgroundGradient: {
        flex: 1,
        width: "100%",
    alignItems: "center",
    justifyContent: "center",
      },

  logo: {
    width: 308,
    height: 153,
    alignItems: 'center',
    marginBottom: 30,
  },
  hiText: {
    color: '#F9F7C9',
    fontSize: 36,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  logButton: {
    backgroundColor: '#F9F7C9',
    padding: 15,
    borderRadius: 20,
    width: 320,
    alignItems: 'center',
    marginTop: 20
  },
  loginText: {
    color: '#00A39D',
    alignItems: 'center',
    fontWeight: 'bold',
    position: 'relative',
    fontSize: 20,
  },
  signButton: {
    backgroundColor: '#F9F7C9',
    padding: 15,
    borderRadius: 20,
    width: 320,
    alignItems: 'center',
    marginTop: 30
  },
  buttonText: {
    color: '#00A39D',
    alignItems: 'center',
    fontWeight: 'bold',
    position: 'relative',
    fontSize: 20,
  },  
});