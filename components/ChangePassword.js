import axios from "axios";
import React, { useEffect } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react/cjs/react.development";

const ChangePassword = ({
  forgotfile,
  setForgotFile,
  userName,
  setUserName,
}) => {
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPasssword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [answerError, setAnswerError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [confirmPassswordError, setConfirmPasswordError] = useState(false);


  const handleChangePasswoprd = () => {
    validation();
    if (!validation() && answer.length && newPassword === confirmPasssword) {
      question.forEach((val) => {
        if (val.answer === answer) {
          let passwords = {
            password: newPassword,
          };
          axios
            .post(
              `http://9b4b-202-83-17-224.ngrok.io/aliens/updatePassword/${userName}`,
              passwords
            )
            .then((req, res) => {
              setForgotFile(false);
            })
            .catch((err) => {
              console.log("error", err);
            });
        } else {
          console.log("please answer as per.... ");
        }
      });
    
    } else {
      setPasswordError(true);
    }
  };

  const validation = () => {
    if (!answer.length) {
      setAnswerError(true);
    }
    if (!newPassword.length) {
      setNewPasswordError(true);
    }
    if (!confirmPasssword.length) {
      setConfirmPasswordError(true);
    }
  };

  useEffect(() => {
    axios
      .get(
        `http://9b4b-202-83-17-224.ngrok.io/aliens/getExistingUser/${userName}`
      )
      .then((res) => {
        setQuestion(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={forgotfile}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setForgotFile(!forgotfile);
        }}
      >
        <View>
          <View style={{ marginLeft: 90 }}>
            <Text style={{ fontSize: 20, color: "#63615C" }}>
              Forgot your Password?
            </Text>
          </View>
          <View
            style={{
              marginTop: 8,
              borderBottomColor: "#EDBC1B",
              borderBottomWidth: 1.2,
            }}
          />
          <View
            style={{
              borderWidth: 1,
              height: 250,
              width: "100%",
              borderColor: "#D6D5D1",
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 15, color: "#63615C" }}>
                Let us help you
              </Text>
            </View>
            <View
              style={{
                marginTop: 8,
                borderBottomColor: "#D6D5D1",
                borderBottomWidth: 1.2,
              }}
            />
            <View style={{ marginLeft: 10, marginTop: 10 }}>
              {question.map((val) => {
                return <Text key={val}>{val.question} :</Text>;
              })}
            </View>
            <View>
              <TextInput
                placeholder="Answer the question"
                style={styles.input1}
                value={answer}
                onChangeText={(text) => setAnswer(text)}
              ></TextInput>
              {answerError && (
                <Text style={{ color: "red", marginLeft: 10, marginTop: 9 }}>
                  field Required
                </Text>
              )}
            </View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text>New password:</Text>
            </View>
            <View>
              <TextInput
                style={styles.input1}
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
              ></TextInput>
              {newPasswordError && (
                <Text style={{ color: "red", marginLeft: 10, marginTop: 9 }}>
                  field Required
                </Text>
              )}
            </View>

            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text>Confirm password:</Text>
            </View>
            <View>
              <TextInput
                style={styles.input1}
                value={confirmPasssword}
                onChangeText={(text) => setConfirmPassword(text)}
              ></TextInput>
              {confirmPassswordError && (
                <Text style={{ color: "red", marginLeft: 10, marginTop: 9 }}>
                  field Required
                </Text>
              )}
              {passwordError && (
                <Text style={{ color: "red", marginLeft: 10, marginTop: 9 }}>
                  Password didn't match
                </Text>
              )}
            </View>
            <View style={{ marginTop: 15, marginLeft: 10, width: 150 }}>
              <Button
                title="Change pasword"
                color="#F0BA0A"
                onPress={handleChangePasswoprd}
              ></Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  input1: {
    height: 40,
    width: 200,
    borderWidth: 0.5,
    marginLeft: 12,
    borderColor: "#D6D5D1",
    marginTop: 5,
    padding: 5,
  },
});
