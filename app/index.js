import React from "react";
import { StackNavigator } from "react-navigation";
import { Text } from "react-native";
import * as firebase from "firebase";
import Home from "./screens/home";
import Login from "./screens/login";
import LoginScreen from "./screens/loginScreen";
import Headers from "./components/header";

const firebaseConfig = {
  apiKey: "AIzaSyCYFMlIEfe4pVSnvtIWX1U2TCVWQoYeUpc",
  databaseURL: "https://spill-the-beans.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);

const RouteConfigs = {
  Login: {
    screen: Login,
    navigationOptions: Headers.myNavOptions,
    },
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Jacksonville",
         headerStyle: {
        backgroundColor: "#323232",
         },
    },
  },
  LoginScreen: { screen: LoginScreen }
};

export default StackNavigator(RouteConfigs);
