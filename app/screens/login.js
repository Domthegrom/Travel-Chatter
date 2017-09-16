import React, {Component} from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import FacebookButton from '../components/facebookButton'
import AppIntro from '../components/appIntro'

export default class Login extends Component {
  render() {
    return (
       <AppIntro />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
})