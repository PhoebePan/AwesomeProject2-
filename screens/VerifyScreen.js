import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export default class VerifyScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Verify Screen</Text>
        <Button title="Go to Me Screen" onPress={() => Actions.me()} />
        <Text onPress={() => Actions.pop()}>Back</Text>
      </View>
    );
  }
}
