 import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import FacebookButton from '../components/facebookButton'

export default class Login extends Component {
  render() {
    return (
       <Image
        style={styles.container}
        source={require("../img/travelBackground.jpg")}
      >
      </Image>
    )
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
})