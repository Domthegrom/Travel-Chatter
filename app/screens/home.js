import Expo from "expo";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, ListItem, Button } from 'react-native-elements'
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
      <View style={styles.container}>
      <ScrollView>
        <Card
        title='General!'
        image={require('../img/slider2.jpg')}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          //icon={{name: 'code'}}
          backgroundColor='#03A9F4'
         // fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
      <Card
        title='Family Friendly'
        image={require('../img/slider2.jpg')}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          //icon={{name: 'code'}}
          backgroundColor='#03A9F4'
         // fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
      <Card
        title='Night Life'
        image={require('../img/slider2.jpg')}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
         // icon={{name: 'code'}}
          backgroundColor='#03A9F4'
         // fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
      <Card
        title='Restaurants'
        image={require('../img/slider2.jpg')}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          //icon={{name: 'code'}}
          backgroundColor='#03A9F4'
         // fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
