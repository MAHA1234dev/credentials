import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Video } from "expo-av";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  Picker,
} from "react-native";
import FotPassword from "./FotPassword";

const Home = ({ home, setHome, navigation }) => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [controls, setControls] = useState(true);
  const [changePassword, setchangePassword] = useState(false);
  const creataeAlertMessage = () => {
    Alert.alert("Alert Title :", "Are You Sure You Want to Exit", [
      { text: "No", onPress: () => setHome(true) },
      { text: "Yes", onPress: () => setHome(false) },
    ]);
  };
  const handlePress = () => {
    setVideoPlay(true);
    // setTimeout(() => {
    //   setControls(false)
    // }, 5000);
  };
  const handleChangePassword = () => {
    setchangePassword(true);
    Alert.alert("asghmhdf");
  };
  const stack = createNativeStackNavigator();
  // const drawer = createDrawerNavigator()
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={home}
        onRequestClose={creataeAlertMessage}
      >
        {/* <View>
          <View>
            <Text style={styles.heading}>Welcome to Sweet Home</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Video
              source={{
                uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/EJsJFv-/videoblocks-animation-sci-fi-door-opening-to-green-screen_raz091o0_w__f915a626a8355c495beaec1841411458__P360.mp4",
              }}
              rate={2.0}
              volume={10.0}
              resizeMode="cover"
              isMuted={true}
              isLooping
              
              shouldPlay={videoPlay}
              style={{ height: 450, width: 360 }}

              // useNativeControls={controls}
            ></Video>
          </View>
        <View>
            <Button title="Push" onPress={handlePress}></Button>
          </View>
        </View> */}
        <View style={styles.precontainer}>
          {!changePassword && (
            <View>
              <Text style={styles.heading}>Welcome to Sweet Home</Text>
            </View>
          )}

          {!changePassword && (
            <View style={styles.picker}>
              <Text
                style={{ color: "#D6E319", fontWeight: "bold" }}
                onPress={handleChangePassword}
              >
                ChangePassword
              </Text>
            </View>
          )}

          {changePassword && (
            <NavigationContainer>
              <stack.Navigator>
                <stack.Screen
                  name="FotPassword"
                  component={FotPassword}
                ></stack.Screen>
              </stack.Navigator>
            </NavigationContainer>
          )}

          {/* <Picker style={styles.picker} onPress = {handleChangePassword}>
            <Picker.Item label="Options" value="" />
            <Picker.Item label="Change Password" value="saf"/>
          </Picker> */}
        </View>

        <View>
          {!changePassword && (
            <ImageBackground
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXc0jhd_3C3grkIwx9uxJ0Q3a7IF-h_uUNCw&usqp=CAU",
              }}
              style={{
                height: 200,
                width: "100%",
                margin: 10,
                transform: [
                  {
                    rotate: "0deg",
                  },
                ],
              }}
            >
              <View>
                <Video
                  source={{
                    uri: "https://images.all-free-download.com/footage_preview/mp4/boat_6891536.mp4",
                  }}
                  rate={10.0}
                  volume={100.0}
                  resizeMode="cover"
                  isMuted={true}
                  isLooping
                  shouldPlay={videoPlay}
                  style={{ height: 80, width: 150, marginLeft: 115 }}
                  // useNativeControls={controls}
                ></Video>
              </View>
              <View style={{ width: 55, height: 30, marginLeft: 180 }}>
                <Button
                  title="play"
                  color="#D5D8DC"
                  onPress={handlePress}
                ></Button>
              </View>
            </ImageBackground>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default Home;

/* <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIklN71HYhdJztNN3TBKP5cFdEoobk57HCNkYYG7Y9QrjqMk7OiSCs1ia7qvMmV7y953g&usqp=CAU",
                  }}
                  style={{
                    height: 100,
                    width: 50,
                    marginTop: 240,
                    marginLeft: 0,
                    transform: [
                      {
                        rotate: "0deg",
                      },
                    ],
                  }}
                ></Image> */

const styles = StyleSheet.create({
  heading: {
    marginTop: 30,
    marginLeft: 50,
    fontWeight: "bold",
    fontSize: 20,
    color: "#DC143C",
  },
  precontainer: {
    flexDirection: "row",
  },
  picker: {
    marginTop: 35,
    paddingLeft: 10,
  },
});
