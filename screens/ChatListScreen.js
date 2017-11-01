import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export default class ChatListScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Chat List Screen</Text>
        <Button title="Go to Caht screen" onPress={() => Actions.chat()} />
        <Text onPress={() => Actions.pop()}>Back</Text>
      </View>
    );
  }
}
