import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Background = require("../assets/bg1.png");
const Bsi = require("../assets/bsilogo.png");
const Teller = require("../assets/teller.png");
const Teller1 = require("../assets/teller1.png");
const Customer = require("../assets/customer-service.png");

const handleLogin = () => {
  // Logika autentikasi bisa ditambahkan di sini
  // Misalnya, memeriksa username dan password dengan data di server
  console.log("Username:", username);
  console.log("Password:", password);
  // ... logika autentikasi lainnya
};

const DaftarAntrian = () => {
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.background}
    >
      <Image
        source={Bsi}
        style={{ width: 410, height: 120, marginBottom: 50 }}
      />
      <View style={styles.posisi}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText1}>TELLER</Text>
          <Image
            source={Teller1}
            style={{
              width: 80,
              height: 80,
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleLogin}>
          <Text style={styles.buttonText}>CS</Text>
          <Image
            source={Customer}
            style={{ width: 80, height: 80, marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

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
  button: {
    flex: 0,
    backgroundColor: "#AAD9BB",
    padding: 12,
    margin: 2,
    borderRadius: 24,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    width: 150,
    height: 150,
    alignItems: "center",
  },
  button1: {
    flex: 0,
    backgroundColor: "#EBD9B4",
    padding: 12,
    margin: 2,
    borderRadius: 24,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    width: 150,
    height: 150,
    alignItems: "center",
    marginLeft: 20,
  },
  buttonText: {
    justifyContent: "center",
    color: "#00A39D",
    fontSize: 20,
    fontWeight: "500",
    fontWeight: "bold",
  },
  buttonText1: {
    color: "#00A39D",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  posisi: {
    flexDirection: "row",
  },
});

export default DaftarAntrian;
