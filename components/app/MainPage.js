import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const MainPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(dob);
  console.log(email);
  console.log(password);

  const handleReset = () => {
    console.log("reaset");
    setFirstName("");
    setLastName("");
    setAge("");
    setDob("");
    setEmail("");
    setPassword("");
  };
  const handleRegister = () => {
    console.log("reg");
  };
  const loginHere = () => {
    console.log("loginHere");
  };
  const registerHere = () => {
    console.log("registerHere");
  };
  return (
    <View>
      {/* <View style={styles.container}>
        <Text>Welcome Home</Text>
      </View> */}
      {/* <View>
        <View>
          <Button title="Login" onPress={loginHere}></Button>
        </View>
        <View>
          <Button title="Login" onPress={registerHere}></Button>
        </View>
      </View> */}
      <View style={styles.textContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Your First Name"
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input1}
            placeholder="Enter Your Last Name"
            onChangeText={(lastName) => setLastName(lastName)}
            value={lastName}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Age"
            value={age}
            onChangeText={(text) => setAge(text)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <TextInput
            style={styles.input1}
            placeholder="Enter Your DateOfBirth"
            value={dob}
            onChangeText={(text) => setDob(text)}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.textContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>
        <View>
          <TextInput
            style={styles.input1}
            placeholder="Enter Your Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            keyboardType="twitter"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ marginLeft: "98px", width: "80px" }}>
          <Button title="Reset" color="#f194ff" onPress={handleReset}></Button>
        </View>
        <View style={{ marginLeft: "10px" }}>
          <Button
            title="Register"
            color="#f194ff"
            onPress={handleRegister}
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  // container: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  textContainer: {
    //   marginTop : 10,
    marginLeft: 10,
    flexDirection: "row",
  },
  input: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    margin: 12,
    paddingLeft: 5,
  },
  input1: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    margin: 12,
    marginLeft: 15,
    paddingLeft: 5,
  },
  buttonContainer: {
    // marginLeft: 120,
    flexDirection: "row",
  },
  // Button: {
  //   width:100,
  //   paddingLeft: 5,

  // },
  // button1 :{
  //   paddingLeft: 10,

  // }
});
