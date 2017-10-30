import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, KeyboardAvoidingView } from "react-native";
import { NavigationActions } from "react-navigation";
import * as firebase from "firebase";
import FacebookButton from "../components/facebookButton";
import LoginForm from "../components/loginForm"
import { Card } from 'react-native-elements';
export default class LoginSCreen extends React.Component {
  componentDidMount() {
    // Make this a function soon
    //firebase.auth().signOut();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("Home", { uid: user.uid });
      }
    });
  }

  authenticate = token => {
    const provider = firebase.auth.FacebookAuthProvider;
    const credential = provider.credential(token);
    return firebase.auth().signInWithCredential(credential);
  };

  createUser = (uid, userData) => {
    firebase
      .database()
      .ref("users")
      .child(uid)
      .update(userData);
  };

  login = async () => {
    const ADD_ID = "959690077504034";
    const options = {
      permissions: ["public_profile"]
    };
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      ADD_ID,
      options
    );
    if (type === "success") {
      const fields = ["id", "first_name", "birthday"];
      const response = await fetch(
        `https://graph.facebook.com/me?fields=${fields.toString()}&access_token=${token}`
      );
      const userData = await response.json();
      const { uid } = await this.authenticate(token);
      this.createUser(uid, userData);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../img/logo.png")} />
        </View>
        <View style={styles.facebookContainer}>
          <FacebookButton onPress={this.login}/>
        </View>
        <View style={styles.formContainer} />
        <Text style={styles.or}>or</Text>
        <LoginForm />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  facebookContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  or: {
    textAlign: 'center'
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 125
  }
});
