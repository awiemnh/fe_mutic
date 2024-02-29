import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  Button,
  Image,
} from "react-native";

const Background = require("../assets/bg1.png");
const Customer = require("../assets/customer-service.png");

const handleLogin = () => {
  // Logika autentikasi bisa ditambahkan di sini
  // Misalnya, memeriksa username dan password dengan data di server
  console.log("Username:", username);
  console.log("Password:", password);
  // ... logika autentikasi lainnya
};

function NoAntrianCS() {
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.background}
    >
      <ScrollView contentContainerStyle={{}}>
        <View style={{ marginRight: 200, marginTop: 100 }}>
          <Button title="<< Home" onPress={handleLogin} color="white" />
        </View>
        <View style={styles.content}>
          <View style={styles.buttonContainer}></View>
          <View style={styles.borderin}>
            <View style={styles.borderin1}>
              <Text style={styles.title}>NO ANTRIAN TELLER ANDA</Text>
            </View>
            <Text style={styles.title1}>1</Text>
            <Image
              source={Customer}
              style={{
                //   flex: 1,
                //   justifyContent: "center",
                //   alignItems: "center",
                width: 150,
                height: 150,
                marginTop: 40,
                marginBottom: 100,
                marginLeft: 77,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 50,
    marginBottom: 56,
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
    textAlign: "center",
    color: "white",
  },
  title1: {
    fontSize: 90,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
    textAlign: "center",
    color: "#00A39D",
  },
  borderin: {
    borderColor: "#E2E8F0",
    // borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "white",
    // width: 200,
    // height: 200,
    // marginTop: 20,
  },
  borderin1: {
    backgroundColor: "#AAD9BB",
    borderColor: "#E2E8F0",
    width: 300,
    height: 155,
    borderTopLeftRadius: 20, // Adjust as needed
    borderTopRightRadius: 20,
    // marginTop: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#F9F7C9",
  },

  content: {
    marginTop: 40,
  },
});

export default NoAntrianCS;
