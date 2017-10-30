import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          placeholderTextColor="#FFF"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username or Email"
          style={styles.input}
        />
        <TextInput
          returnKeyType="go"
          secureTextEntry
          placeholderTextColor="#FFF"
          placeholder="Password"
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "#0f97ce",
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700"
  }
});
