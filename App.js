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
import { Router, Scene, Tabs, Lightbox } from "react-native-router-flux";
import "babel-polyfill";

import LoginScreen from "./screens/LoginScreen";
import MeScreen from "./screens/MeScreen";
import TargetListScreen from "./screens/TargetListScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";
import VerifyLightbox from "./components/lightbox/VerifyLightbox";
import TargetDetailLightbox from "./components/lightbox/TargetDetailLightbox";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Lightbox>
          <Scene key="root">
            <Scene
              key="login"
              component={LoginScreen}
              title="Login"
              hideNavBar
              initial
            />
            {/* Tab Container */}
            <Scene
              key="tabbar"
              tabs={true}
              tabBarStyle={{ backgroundColor: "#79006E" }}
              hideNavBar
              tabBarPosition={"bottom"}
            >
              <Scene
                key="targetlist"
                component={TargetListScreen}
                title="Target List"
                icon={TabIcon}
              />
              <Scene
                key="chatlist"
                component={ChatListScreen}
                title="Chat List"
                icon={TabIcon}
              />
              <Scene
                key="me"
                component={MeScreen}
                title="About Me"
                icon={TabIcon}
              />
            </Scene>
            {/* Chat Screen */}
            <Scene key="chat" component={ChatScreen} title="Chat Screen" />
          </Scene>
          {/* Verify Lightbox */}
          <Scene key="verify_lightbox" component={VerifyLightbox} hideNavBar />
          <Scene
            key="target_detail_lightbox"
            component={TargetDetailLightbox}
            hideNavBar
          />
        </Lightbox>
      </Router>
    );
  }
}
