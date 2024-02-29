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

function AntrianCS() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [valueError, setValueError] = useState("");
  const [nameError, setNameError] = useState("");

  // State variable to store the submitted data
  const [submittedData, setSubmittedData] = useState([]);

  const validateField = (field, value, regex, errorMessage) => {
    if (!regex.test(value)) {
      switch (field) {
        case "Name":
          setNameError(errorMessage);
          break;
        case "Value":
          setValueError(errorMessage);
          break;
        default:
          break;
      }
    } else {
      switch (field) {
        case "Value":
          setValueError("");
          break;
        case "Name":
          setNameError("");
          break;
        default:
          break;
      }
    }
  };
  const handleSubmit = async () => {
    if (!value || !name) {
      Alert.alert("Error", "Please fill in all fields.");
    } else {
      // Generate a unique key for this ticket
      const ticketId = Date.now().toString();

      // Save the form data to AsyncStorage
      const ticketData = {
        value,
        name,
      };
      try {
        await AsyncStorage.setItem(ticketId, JSON.stringify(ticketData));
      } catch (error) {
        console.error("Error saving data to AsyncStorage: ", error);
      }

      // Show success message
      Alert.alert("Success", "Anda mendapat no antrian");

      // Clear the form fields

      setValue("");
      setName("");
    }
    
  };

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={Customer}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: 150,
            height: 150,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 70,
          }}
        />
        <Text style={styles.title}>Silahkan Masukkan Data</Text>

        <Text style={styles.label}>No. Rekening</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(text) => {
            setValue(text);
            validateField(
              "Value",
              text,
              /^\$?[0-9]+(\.[0-9][0.9])?$/,
              "Hanya Bisa Input Number"
            );
          }}
          placeholder="Masukkan No Rekening Anda"
        />
        {valueError ? <Text style={styles.error}>{valueError}</Text> : null}
        <Text style={styles.label}>Keperluan</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => {
            setName(text);
            validateField("Name", text, /^[A-Za-z\s]+$/, "");
          }}
          placeholder="Masukkan Keperluan Anda"
        />
        {nameError ? <Text style={styles.error}>{nameError}</Text> : null}

        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} color="white" />
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
    color: "#F9F7C9",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#F9F7C9",
  },
  input: {
    height: 60,
    width: 300,
    borderColor: "#E2E8F0",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
    color: "white",
  },
  error: {
    color: "red",
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: "#F8AD3C",
    borderRadius: 10,
    height: 45,
  },
  content: {
    marginTop: 150,
  },
});

export default AntrianCS;
