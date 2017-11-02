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
import MeScreen from "./screens/MeScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginScreen} title="Login" initial />
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: "#FFFFFF" }}
            hideNavBar
          >
            <Scene
              tabs={true}
              key="chatlist"
              component={ChatListScreen}
              title="Chat List"
            />
            <Scene key="chat" component={ChatScreen} title="Chat" />
            <Scene tabs={true} key="me" component={MeScreen} title="About Me" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
