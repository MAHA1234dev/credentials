import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  // TextInput,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";

import ActivityOrder from "./components/ActivityOrder";
import AlertMsg from "./components/AlertMsg";
import MainPage from "./components/app/MainPage";
import ChangePassword from "./components/ChangePassword";
import DrawerEx from "./components/DrawerEx";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import ScrolViewEx from "./components/ScrolViewEx";

export default function App() {
  const [click, setClick] = useState(false);
  const [register, setRegister] = useState(false);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [forgotfile, setForgotFile] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [fieldError, setFieldError] = useState(false);
  const [data, setData] = useState([]);
  const [color, setColor] = useState(false);
  const [home, setHome] = useState(false);

  const validation = () => {
    if (!userName.length) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
    if (!password.length) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  const mapData = (data) => {
    const result = [];
    // Object.values(data).forEach((item) => {
    //   item.data.forEach((ele) => {
    //     result.push({
    //       password: ele.password,
    //       mail: ele.mail,
    //     });
    //   });
    // });
    data.forEach((val) => {
      result.push({
        password: val.password,
        mail: val.email,
      });
    });
    setData(result);
  };
  // useEffect(() => {
  //   axios
  //     .get("https://home-9d097-default-rtdb.firebaseio.com/MyHome.json")
  //     .then((res) => {
  //       mapData(res.data);
  //     })
  //     .catch((error) => {
  //       Alert.alert(error);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get("http://9b4b-202-83-17-224.ngrok.io/aliens")
      .then((res) => {
        mapData(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  const loginHere = () => {
    validation();
    if (userName.length && password.length) {
      let flag = false;
      data.forEach((val) => {
        if (val.mail === userName && val.password === password) {
          flag = true;
          // Alert.alert("Logged in successfully");
          // setRegister(false);
          // setClick(false);
          // setHome(true);
          // return;
        }
        if (val.password != password && val.mail === userName) {
          Alert.alert("Incorrect password");
          setFieldError(true);
        }
        if (val.mail != userName) {
          Alert.alert("Username does not exist, please SignUp ");
          setClick(true);
          // setRegister(true)
        }
      });
      if (flag) {
        Alert.alert("Logged in successfully");
        // setRegister(false);
        // setClick(false);
        setHome(true);
      }
    }
  };
  const RegisterHere = () => {
    setRegister(true);
  };
  const clearAll = () => {
    setUserNameError(false);
    setPasswordError(false);
    setFieldError(false);
    setPassword("");
    setUserName("");
  };
  const passwordHandle = () => {
    setForgotFile(true);
  };
  return (
    <View style={styles.container}>
      {/* <Text>flatlist</Text>
      <FlatList
        data={[
          { key: "maga" },
          {
            key: "dev",
          },
          { key: "hansik" },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      ></FlatList> */}
      {/* <Text>SectionList</Text>
      <SectionList
        sections={[
          {
            title: "employees",
            data: [{ key: "maga" }, { key: "dev" }, { key: "dihjs" }],
          },
          {
            title: "trainees",
            data: [{ key: "priyanka" }, { key: "azam" }, { key: "chandan" }],
          },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      ></SectionList> */}

      {/* <Button title="click" onPress={() => setClick(true)}></Button>
      {click && <ScrolViewEx />} */}
      {/* <ActivityOrder />
      <AlertMsg />
      <DrawerEx />
      <Text>Drawer</Text> */}
      {/* <MainPage /> */}
      <View>
        <Text style={styles.heading}>Welcome Home</Text>
        <View style={styles.textContainer}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter Your UserName"
              value={userName}
              onChangeText={(userName) => setUserName(userName)}
            />
            {userNameError && (
              <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                Field Required
              </Text>
            )}
          </View>
          <View>
            <TextInput
              style={styles.input1}
              // placeholder="Enter Your Password"
              value={password}
              label="Password"
              onChangeText={(text) => setPassword(text)}
              keyboardType="twitter"
              secureTextEntry={true}
              right={<TextInput.Icon name="eye" />}
            />
            {passwordError && (
              <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                field Required
              </Text>
            )}
            {fieldError && (
              <Text style={{ color: "red", marginLeft: 20, marginTop: -9 }}>
                Incorrect Password.
                <Text style={{ fontWeight: "bold" }} onPress={passwordHandle}>
                  Forgot password?
                </Text>
              </Text>
            )}
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View style={styles.text}>
            <Button title="Login" onPress={loginHere}></Button>
          </View>
          {click === true ? (
            <View style={styles.text1}>
              <Button title="Register" onPress={RegisterHere}></Button>
            </View>
          ) : (
            <View style={styles.text1}>
              <Button title="clear" onPress={clearAll}></Button>
            </View>
          )}
          <View style={{ marginTop: 60, marginLeft: -180 }}>
            {!fieldError && (
              <View style={{ width: 200, marginLeft: 20 }}>
                <Text onPress={passwordHandle}>Forgot password?</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      {register && (
        <RegisterPage
          register={register}
          setRegister={setRegister}
          setClick={setClick}
        />
      )}
      {home && <Home home={home} setHome={setHome} />}
      {forgotfile && (
        <ChangePassword forgotfile={forgotfile} setForgotFile={setForgotFile} userName={userName} setUserName={setUserName} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  // flex: 1,
  // backgroundColor: "#fff",
  // alignItems: "center",
  // justifyContent: "center",
  // marginTop: 30,
  // },

  heading: {
    marginTop: 30,
    marginLeft: 130,
    fontWeight: "bold",
    fontSize: 20,
  },
  textContainer: {
    //   marginTop : 10,
    marginLeft: 80,
    // flexDirection: "row",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderRadius: 30,
    margin: 12,
    paddingLeft: 5,
  },
  input1: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderRadius: 30,
    margin: 12,
    marginLeft: 15,
    paddingLeft: 5,
  },
  text: {
    marginLeft: 85,
    color: "white",
    width: 100,
    paddingLeft: 20,
  },
  text1: {
    color: "white",
    width: 100,
    paddingLeft: 10,
  },
});
