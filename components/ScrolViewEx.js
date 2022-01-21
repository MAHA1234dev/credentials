import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ScrolViewEx = () => {
    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 64,
        height: 64
      };
      
  return <ScrollView>
       <Text style={{ fontSize: 96 }}>What's the best</Text>
<Image 
    source={logo}
     >

</Image>
<Text style={{ fontSize: 96 }}>What's the best for you</Text>
<Image 
    source={logo}
     >

</Image>
<Image 
    source={logo}
     >

</Image>
<Image 
    source={logo}
     >

</Image>
<Image 
    source={logo}
     >

</Image>
<Image 
    source={logo}
     >

</Image>
<Image 
    source={logo}
     >

</Image>
<Image 
    source={logo}
     >

</Image>
<Image 
    source={logo}
     >

</Image>
<Image 
    source={logo}
     >

</Image>
<Image 
    source={logo}
     >

</Image>



  </ScrollView>;
};

export default ScrolViewEx;

const styles = StyleSheet.create({});
