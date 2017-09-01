import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
import * as firebase from 'firebase'
import FacebookButton from "../components/facebookButton";

export default class Login extends React.Component {
  state = {
    showSpinner: true
  };

  componentDidMount() {
    // firebase.auth().signOut();
    this.listenForFacebookLogin();
  }

  listenForFacebookLogin() {
    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        firebase
          .database()
          .ref("users")
          .child(auth.uid)
          .once("value", snap => {
            const user = snap.val();
            if (user != null) {
              this.goHome(user);
            }
          });
      } else {
        this.setState({ showSpinner: false });
      }
    });
  }

  goHome(user) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: "Home", params: { user } })
      ]
    });
    this.props.navigation.dispatch(resetAction);
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
      .update({ ...userData, uid });
  };

  login = async () => {
    this.setState({ showSpinner: true });
    const APP_ID = "1248324798627060";
    const options = {
      permissions: ["public_profile"]
    };
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      APP_ID,
      options
    );
    if (type === "success") {
      const fields = ["id", "first_name"];
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
      <Image
        style={styles.container}
        source={require("../components/travelBackground.jpg")}
      >
        <Text style={styles.title}>Travel Chatter</Text>
        <FacebookButton onPress={this.login} />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 600,
    height: 700,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 28,
    marginBottom: 70
  }
});
