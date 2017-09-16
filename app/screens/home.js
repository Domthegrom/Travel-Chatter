import Expo from "expo";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Image
} from "native-base";
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
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Thumbnail source={require("../img/logo.png")} />
              <Text>NativeBase</Text>
              <Text note>April 15, 2016</Text>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{ resizeMode: "cover" }}
                source={require("../img/logo.png")}
              />
              <Text>//Your text here</Text>
              <Button transparent textStyle={{ color: "#87838B" }}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232"
  }
});
