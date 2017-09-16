import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class AppIntro extends React.Component{
    render() {
        return(
          <Image
          style={styles.container}
          source={require("../img/travelBackground.jpg")}
        >
            <Swiper style={styles.wrapper} showsButtons={false}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Chit-Chat from City-to-City, Connecting you to the locals in every city!</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Simply Sign in to Spill The Beans and explore the various categories available in your current city! </Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Chat in Real-Time with users within your city limits. Find sweet new locations to visit with your family and friends.</Text>
            </View>
          </Swiper>
          </Image>
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
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: "center",
    }
  })

AppRegistry.registerComponent('myproject', () => swiper);