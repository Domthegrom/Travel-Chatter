import React from "react";
import { StackNavigator } from "react-navigation";
import { Text } from "react-native";
import * as firebase from "firebase";
import Home from "./screens/home";
import Login from "./screens/login";
import LoginScreen from "./screens/loginScreen";

const firebaseConfig = {
  apiKey: "AIzaSyD-8l49UiX0H8vLUS28h7KxpdnQXj_tCZU",
  databaseURL: "https://clonetinder-c7909.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);

const RouteConfigs = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Travel Chatter",
      headerRight: (
        <Text
          style={{ marginRight: 5, color: "blue", FontSize: 15 }}
          onPress={() => this.state.navigation.navigate("LoginScreen")}
        >
          Login
        </Text>
      )
    }
  },

  Home: {
    screen: Home,
    navigationOptions: {
      title: "Jacksonville"
    }
  },
  LoginScreen: { screen: LoginScreen }
};

export default StackNavigator(RouteConfigs);
