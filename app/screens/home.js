import React from "react";
import { View, Text } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Image,
  Button,
  Icon,
  Header,
  Title
} from "native-base";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem button>
              <Text>General Chat</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem button>
              <Text>Food</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem button>
              <Text>Exploration</Text>
              <Text style={{ opacity: 9, fontSize: 12 }}>Things to see</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem button>
              <Text>Family Activities</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem button>
              <Text>Hangouts</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem button>
              <Text>Night Life</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
