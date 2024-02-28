import { StyleSheet, Text, TouchableOpacity, View, Image, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import PopUpLogin from '../components/PopUpLogin';
import { ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const Background = require("../assets/bg.png");
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const [status, setStatus] = useState(500);
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://kind-fez-ox.cyclic.app/api/login', { username, password });
      console.log('status', response.status);
      setStatus(response.status);

      const token = response.data.token;
      setToken(token);
      console.log('Token:', token);

      setUserName('');
      setPassword('');

      //navigation.navigate('Splash');
      navigation.navigate('Welcome', { token, username });
    } catch (error) {

      if (error.code === "ERR_BAD_REQUEST") {
        setModalVisible(true);
        setMessage("Username atau Password salah")
      }
      
      console.error('Login Gagal', error);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ImageBackground source={require('../assets/bg.png')} // Replace with the path to your image
    style={styles.backgroundGradient}>
    
    <View style={styles.container}>
    <Image
        source={require('../assets/bsilogo.png')}
        style={styles.logo}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="user" size={20} color="#00A39D" />
        <TextInput
          style={styles.input}
          placeholder='Masukkan Username'
          placeholderTextColor='#00A39D'
          value={username}
          onChangeText={setUserName}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="lock" size={20} color="#00A39D" />
        <TextInput
          style={styles.input}
          placeholder='Masukkan Password'
          placeholderTextColor='#00A39D'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity disabled={!username || !password }
      style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>{'\n'}Belum memiliki akun?</Text>
      </TouchableOpacity>

      <PopUpLogin
        visible={modalVisible}
        onClose={handleCloseModal}
        message={message}
      />
    </View>
    </ImageBackground>
  );
};


export default LoginScreen;

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  signButton: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 315,
    height: 153,
    alignItems: 'center',
    marginBottom: 30,
},
  input: {
    borderColor: '#00A39D',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#F9F7C9',
  },
  loginButton: {
    backgroundColor: '#AAD9BB',
    padding: 10,
    borderRadius: 5,
    width: 320,
    alignItems: 'center',
    marginTop: 20
  },
  loginText: {
    color: '#00A39D',
    alignItems: 'center',
    fontWeight: 'bold',
    position: 'relative'
  },
  buttonText: {
    color: '#FFFFFF',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
