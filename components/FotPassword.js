import React from "react";
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

const FotPassword = ({forgotfile,setForgotFile}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPasssword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

const validation = () => {
  if(!oldPassword.length){
    setOldPasswordError(true)
  }
  if(!newPassword.length){
    setNewPasswordError(true)
  }
  if(!confirmPasssword.length){
    setConfirmPasswordError(true)
  }
}

  const handleChangePasswoprd = () => {
    validation()
    if (newPassword === confirmPasssword) {
      setForgotFile(false);
    } else {
      set(true);
    }
  };
  return (
    <View>
      {/* <Modal
        animationType="slide"
        transparent={false}
        visible={forgotfile}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setForgotFile(!forgotfile);
        }}
      > */}
        <View>
          <View style={{ marginLeft: 90 }}>
            <Text style={{ fontSize: 20, color: "#63615C" }}>
              Change your password?
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
              <Text>Old password:</Text>
            </View>
            <View>
              <TextInput
                style={styles.input1}
                value={oldPassword}
                onChangeText={(text) => setOldPassword(text)}
              ></TextInput>
              {oldPasswordError && (
                <Text style={{ color: "red", marginLeft: 10 }}>
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
                <Text style={{ color: "red", marginLeft: 10 }}>
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
              {confirmPasswordError && (
                <Text style={{ color: "red", marginLeft: 10 }}>
                  field Required
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
      {/* </Modal> */}
    </View>
  );
};

export default FotPassword;

const styles = StyleSheet.create({
  input1: {
    height: 40,
    width: 200,
    borderWidth: 0.5,
    marginLeft: 12,
    borderColor: "#D6D5D1",
    marginTop: 5,
  },
});
