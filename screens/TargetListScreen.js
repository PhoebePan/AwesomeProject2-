import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export default class TargetListScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Target List Screen</Text>
        <Button
          title="Target Detail Lightbox"
          onPress={() => Actions.target_detail_lightbox()}
        />
        <Button
          title="Go to Caht List screen"
          onPress={() => Actions.chatlist()}
        />
        <Text onPress={() => Actions.pop()}>Back</Text>
      </View>
    );
  }
}
