import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const AlertMsg = () => {
  const createAlertMsg = () => {
    Alert.alert("Alert Title", "My Alert Msg", [
      { text: "cancel", onPress: () => console.log("cancekl") },
      { text: "ok", onPress: () => console.log("cancekl") },
    ]);
  };

  return (
    <View>
      <Text>Alert Messages</Text>
      <Button title={"2-Button Alert"} onPress={createAlertMsg}></Button>
    </View>
  );
};

export default AlertMsg;

const styles = StyleSheet.create({});
