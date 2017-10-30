import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";
import FacebookButton from '../components/facebookButton'
import Swiper from "react-native-swiper";

export default class AppIntro extends React.Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <Image
          style={styles.container}
          source={require("../img/slider.jpg")}
        >
          <View style={styles.slides}>
            <Text style={styles.text}>
              If your reading this you must be fasicnated by the wonders of the world.
            </Text>
          </View>
        </Image>
        <Image
          style={styles.container}
          source={require("../img/slider1.jpg")}
        >
          <View style={styles.slides}>
            <Text style={styles.text}>
              Theres a lot to see. Most of it is hard to find. Shouldn't it be easier?
            </Text>
          </View>
        </Image>
        <Image
          style={styles.container}
          source={require("../img/slider2.jpg")}
        >
          <View style={styles.slides}>
            <Text style={styles.text}>
              Here you can chat in real time with locals in every new area you arrive in. Talk to them maybe they will Spill The Beans.
            </Text>
            <View style={{marginTop: '25%'}}>
            </View>
          </View>
        </Image>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  slides: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});