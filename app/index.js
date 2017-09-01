import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { View } from "react-native";
import * as firebase from "firebase";
import Login from "../app/screens/login";
import Home from "../app/screens/home";

const firebaseConfig = {
    apiKey: "AIzaSyDwp7llVHPAwk2AdNIE34v18pEQCuxXa7Y",
    databaseURL: "https://travelchat-16d9a.firebaseio.com",
  };
  
  firebase.initializeApp(firebaseConfig);

const Routes = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: Headers.myNavOptions
  }
});

export default Routes;
