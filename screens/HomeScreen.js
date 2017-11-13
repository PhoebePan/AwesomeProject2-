import React, { Component } from "react";
import { View, Text, Button, WebView } from "react-native";
import { Actions } from "react-native-router-flux";

export default class HomeScreen extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://beta.yuelaobank.com/" }}
        style={{ marginTop: 0 }}
      />
    );
  }
}
