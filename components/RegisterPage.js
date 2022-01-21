import axios from "axios";
import Log from "expo-cli/build/log";
import React, { useEffect,useState } from "react";

import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";


const RegisterPage = ({
  register,
  setRegister,
  setClick,
  ChildData = () => {},
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasssword, setConfirmPassword] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [firstfieldError, setFirstFieldError] = useState(false);
  const [agefieldError, setAgeFieldError] = useState(false);
  const [dobfieldError, setDobFieldError] = useState(false);
  const [emailfieldError, setemailFieldError] = useState(false);
  const [passwordfieldError, setPasswordFieldError] = useState(false);
  const [confirmPassswordError, setConfirmPasswordError] = useState(false);
  const [questionError, setQuestionError] = useState(false);
  const [answerError, setAnswerError] = useState(false);
  const [matchPass, setMatchPass] = useState(false);

  const handleReset = () => {
    setFirstName("");
    setAge("");
    setDob("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setQuestion("");
    setAnswer("");
    setFirstFieldError(false);
    setAgeFieldError(false);
    setDobFieldError(false);
    setemailFieldError(false);
    setPasswordFieldError(false);
    setConfirmPasswordError(false);
    setQuestionError(false);
    setAnswerError(false);
  };
  const validation = () => {
    if (!firstName.length) {
      setFirstFieldError(true);
    } else {
      setFirstFieldError(false);
    }

    if (!age.length) {
      setAgeFieldError(true);
    } else {
      setAgeFieldError(false);
    }
    if (!dob.length) {
      setDobFieldError(true);
    } else {
      setDobFieldError(false);
    }
    if (!email.length) {
      setemailFieldError(true);
    } else {
      setemailFieldError(false);
    }
    if (!password.length) {
      setPasswordFieldError(true);
    } else {
      setPasswordFieldError(false);
    }
    if (!confirmPasssword.length) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
    if (!question.length) {
      setQuestionError(true);
    } else {
      setQuestionError(false);
    }
    if (!answer.length) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  };
  const handleRegister = () => {
    // validation();
    const data = {
      email: email,
      password: password,
      question: question,
      answer: answer,
    };
    if (!validation() && email.length > 0) {
      if (password === confirmPasssword) {
        axios
          // .post("https://home-9d097-default-rtdb.firebaseio.com/MyHome.json", {
          .post("http://9b4b-202-83-17-224.ngrok.io/aliens", data)
          .then((req, res) => {
            setRegister(false);
            setClick(false);
            Alert.alert("Data Stores Successfully");
          })
          .catch((error) => {
            Alert.alert(error);
          });
      } else {
        setMatchPass(true);
      }
    } else {
      Alert.alert("please fill the blanks");
    }
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={register}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setRegister(!register);
        }}
      >
        <View>
          <View>
            <Text style={styles.heading}>Register Here</Text>
          </View>
          <View style={styles.textContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="UserName"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                placeholderTextColor="#60605e"
              />
              {firstfieldError && (
                <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                  field Required
                </Text>
              )}
            </View>
            <View>
              <TextInput
                style={styles.input1}
                placeholder="Enter Your Age"
                value={age}
                onChangeText={(text) => setAge(text)}
                keyboardType="numeric"
                maxLength={2}
                placeholderTextColor="#60605e"
              />
              {agefieldError && (
                <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                  field Required
                </Text>
              )}
            </View>
          </View>
          <View style={styles.textContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Your DateOfBirth"
                value={dob}
                onChangeText={(text) => setDob(text)}
                keyboardType="numeric"
                placeholderTextColor="#60605e"
                autoComplete="birthdate-year"
                autoCorrect={true}
                // returnKeyLabel="dtae"
                maxLength={10}
                // returnKeyLabel="dd/mm/yyyy"
              />
              {dobfieldError && (
                <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                  field Required
                </Text>
              )}
            </View>
            <View>
              <TextInput
                style={styles.input1}
                placeholder="Enter Your Email Address"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                placeholderTextColor="#60605e"
              />
              {emailfieldError && (
                <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                  field Required
                </Text>
              )}
            </View>
          </View>
          <View style={styles.textContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                keyboardType="twitter"
                secureTextEntry={true}
                placeholderTextColor="#60605e"
              />
              {passwordfieldError && (
                <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                  field Required
                </Text>
              )}
            </View>
            <View>
              <TextInput
                style={styles.input1}
                placeholder="Confirm Password"
                value={confirmPasssword}
                onChangeText={(text) => setConfirmPassword(text)}
                keyboardType="twitter"
                placeholderTextColor="#60605e"
              />
              {confirmPassswordError && (
                <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                  field Required
                </Text>
              )}
              {matchPass && (
                <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                  Password did't match
                </Text>
              )}
            </View>
          </View>
          <View style={styles.textContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter any question"
                value={question}
                onChangeText={(text) => setQuestion(text)}
                keyboardType="twitter"
                // secureTextEntry={true}
                placeholderTextColor="#60605e"
              />
              {questionError && (
                <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                  field Required
                </Text>
              )}
            </View>
            <View>
              <TextInput
                style={styles.input1}
                placeholder="Answer the question"
                value={answer}
                onChangeText={(text) => setAnswer(text)}
                keyboardType="twitter"
                // secureTextEntry={true}
                placeholderTextColor="#60605e"
              />
              {answerError && (
                <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                  field Required
                </Text>
              )}
            </View>
           
          </View>
          <View style={styles.buttonContainer}>
            <View style={{ marginLeft: 98, width: 80 }}>
              <Button title="Reset" onPress={handleReset}></Button>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Button title="Submit" onPress={handleRegister}></Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  heading: {
    marginTop: 30,
    marginLeft: 130,
    fontWeight: "bold",
    fontSize: 20,
  },
  textContainer: {
    //   marginTop : 10,
    marginLeft: 10,
    flexDirection: "row",
  },
  input: {
    height: 40,
    width: 155,
    borderWidth: 1,
    borderRadius: 15,
    margin: 12,
    paddingLeft: 5,
  },
  input1: {
    height: 40,
    width: 155,
    borderWidth: 1,
    borderRadius: 15,
    margin: 12,
    marginLeft: 1,
    paddingLeft: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
