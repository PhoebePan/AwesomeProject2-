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

import LoginScreen from "./screens/LoginScreen";
import MeScreen from "./screens/MeScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginScreen} title="Login" initial />
        <Scene tabs={true} key="me" component={MeScreen} title="About Me" />
        <Scene
          tabs={true}
          key="chatlist"
          component={ChatListScreen}
          title="Chat List"
        />
        <Scene key="chat" component={ChatScreen} title="Chat" />
      </Scene>
    </Router>
  );
};

export default App;
