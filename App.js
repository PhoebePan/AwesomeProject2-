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
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginScreen} title="Login" initial />
        <Scene tabs={true} key="home" component={HomeScreen} title="Home" />
        <Scene key="chat" component={ChatScreen} title="Chat" />
      </Scene>
    </Router>
  );
};

export default App;
