import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export default class MeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Me Screen</Text>
        <Button
          title="Go to Target List screen"
          onPress={() => Actions.targetlist()}
        />
        <Text onPress={() => Actions.pop()}>Back</Text>
      </View>
    );
  }
}
