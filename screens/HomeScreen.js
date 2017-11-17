import React, { Component } from "react";
import { View, Text, Button, WebView } from "react-native";
import { Actions } from "react-native-router-flux";

const DEFAULT_URL = "https://chaos-dev.yuelaobank.com/";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: DEFAULT_URL
    };
  }

  render() {
    let webUrl = this.props.data
      ? DEFAULT_URL + this.props.data
      : DEFAULT_URL + "#" + new Date(); // 強制回到首頁時 webview 顯示首頁

    return <WebView source={{ uri: webUrl }} style={{ marginTop: -40 }} />;
  }
}
