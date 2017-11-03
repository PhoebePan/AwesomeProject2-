import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button
} from "react-native";
import { Router, Scene, Tabs } from "react-native-router-flux";
import "babel-polyfill";

import LoginScreen from "./screens/LoginScreen";
import VerifyScreen from "./screens/VerifyScreen";
import MeScreen from "./screens/MeScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginScreen} title="Login" initial />
          <Scene key="verify" component={VerifyScreen} title="Verify" />
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: "#FFFFFF" }}
            hideNavBar
            tabBarPosition={"bottom"}
          >
            <Scene
              key="chatlist"
              component={ChatListScreen}
              title="Chat List"
              icon={TabIcon}
            />
            <Scene
              key="chat"
              component={ChatScreen}
              title="Chat"
              icon={TabIcon}
            />
            <Scene
              key="me"
              component={MeScreen}
              title="About Me"
              icon={TabIcon}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
