import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
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
    navigationOptions: Headers.myNavOptions
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Jacksonville",
      headerStyle: {
        backgroundColor: "white"
      }
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "white"
      }
    }
  }
};

const tabNav = TabNavigator({
  Home: {
      screen: Home,
      navigationOptions: {
          tabBarLabel:"Tab 1",
          tabBarIcon: ({ tintColor }) => <Icon name={"glass"} size={30} color={tintColor} />
      }
  }

  ///... add more tabs here

}, {
      tabBarOptions: {
          activeTintColor: '#222',
      }
});


export default StackNavigator(RouteConfigs, tabNav);
 