import Expo from "expo";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import { tabNav } from "../index";
import * as firebase from "firebase";
import GeoFire from "geofire";

export default class Home extends React.Component {
  componentWillMount() {
    this.updateUserLocation(this.props.navigation.state.params.uid);
    this.updateUserLocation();
  }

  updateUserLocation = async uid => {
    const { Permissions, Location } = Expo;
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      const location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: false
      });
      const { latitude, longitude } = location.coords;

      const geoFireRef = new GeoFire(firebase.database().ref("geoData"));
      geoFireRef.set(uid, [latitude, longitude]);

      console.log("Permission Granted", location);
    } else {
      console.log("Permission Denied");
    }
  };

  render() {
    return (
      <ScrollView>
      {/* <View style={[styles.parent]}>
        <View style={[styles.child, { backgroundColor: "#996666" }]} />
        <View style={[styles.child, { backgroundColor: "#339966" }]} />
        <View style={[styles.child, { backgroundColor: "#996633" }]} />
        <View style={[styles.child, { backgroundColor: "#669933" }]} />
      </View> */}
      <Card
      onPress={() => navigation.navigate("Home")}
      style={styles.cardContainer}
        image={require('../img/slider2.jpg')}>
      </Card>
      <Card
      style={styles.cardContainer}
        image={require('../img/slider2.jpg')}>
      </Card>
      <Card
      style={styles.cardContainer}
        image={require('../img/slider2.jpg')}>
      </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    margin: 5,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  child: {
    width: "48%",
    margin: "1%",
    aspectRatio: 1
  },
  cardContainer: {
    flex: 1,
    margin: 5,
  }
});
