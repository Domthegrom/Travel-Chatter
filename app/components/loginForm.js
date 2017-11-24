import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import Button from 'react-native-micro-animated-button';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          placeholderTextColor="#e9e9e9"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username or Email..."
          style={styles.input}
        />
        <TextInput
          returnKeyType="go"
          secureTextEntry
          placeholderTextColor="#e9e9e9"
          placeholder="Password..."
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <View style={{ alignItems: 'center' }}>
        <Button
          bounce
          errorColor={'#db4437'}
          errorIconName="thumbs-down"
          foregroundColor={'#444'}
          label="Sign me up!"
          onPress={() =>
            new Date().getSeconds() % 2 === 0 ? this.b4.success() : this.b4.error()}
          ref={ref => (this.b4 = ref)}
          successColor={'#0f9d58'}
          successIconName="thumbs-up"
        />    
        </View>
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
    marginBottom: 10,
    color: "#696969",
    paddingHorizontal: 10,
    borderColor: '#e9e9e9',
    borderWidth: 1,
    borderRadius: 12,
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
