import Expo from "expo";
import React from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";
import GeoFire from "geofire";

export default class Home extends React.Component {
  componentWillMount() {
    this.updateUserLocation(this.props.navigation.state.params.uid)    
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
      <View>
        <Text>Sick Ass Card Stack to be here</Text>
      </View>
    );
  }
}
