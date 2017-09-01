import Expo from "expo";
import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Item, Text } from "native-base";

const Logo = () =>
  <View style={styles.logo}>
    <Image
      style={{ height: 150, width: 175 }}
      source={require("../img/signuplogo.png")}
    />
    <Text
      style={{
        fontSize: 15,
        fontWeight: "bold",
        color: "#0077B5",
        textAlign: "center",
      }}
    >
      Get together and monitor your favorite Crypto Currency and chat in
      real time!
    </Text>
  </View>;
export default Logo;

const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
});