import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, Image } from "react-native";

export default class Headers {
  static myNavOptions = props => {
    const { navigation } = props;
    return {
    //   navigationOptions: {
    //     headerStyle: {
    //      backgroundColor: "#FFFFFF",
    //    },
    //    title: <Image
    //    source={require("../img/logo.png")}
    //    style={{ width: 100, height: 100 }}
    //    resizeMode="contain"
    //  />
    //  },
      headerRight: (
        <Text
          style={{ marginRight: 5, color: "blue", fontSize: 15 }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Login
        </Text>
      ),
    };
  };
}
