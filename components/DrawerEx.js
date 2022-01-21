import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View,
} from "react-native";

const DrawerEx = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };
  const navigationView = () => {
      <View>
        <Text>I am in the drawer</Text>
        <Button
          title="close drawer"
          onPress={() => drawer.current.closeDrawer()}
        ></Button>
      </View>
  };
  return (
    <View>
      <DrawerLayoutAndroid
        ref={drawer}
        //   drawerWidth={100}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <View>
          <Text>Drawer On the {drawerPosition}</Text>
          <Button
            title="Change Drawer Position"
            onPress={() => changeDrawerPosition()}
          />
          {/* <Button 
            title="open drawer"
            onPress={() => drawer.currentopenDrawer()}
            ></Button> */}
        </View>
      </DrawerLayoutAndroid>
    </View>
  );
};

export default DrawerEx;

const styles = StyleSheet.create({});
