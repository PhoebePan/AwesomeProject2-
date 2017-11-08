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
import {
  Router,
  Scene,
  Tabs,
  Drawer,
  Lightbox
} from "react-native-router-flux";
import { Icon } from "react-native-elements";
import "babel-polyfill";

import LoginScreen from "./screens/LoginScreen";
import MeScreen from "./screens/MeScreen";
import TargetListScreen from "./screens/TargetListScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";
import VerifyLightbox from "./components/lightbox/VerifyLightbox";
import TargetDetailLightbox from "./components/lightbox/TargetDetailLightbox";
import DrawerContent from "./components/drawer/DrawerContent";
import MenuIcon from "./images/menu_burger.png";

const TabIcon = ({ iconname, focused }) => {
  return <Icon name={iconname} color={focused ? "white" : "#54004A"} />;
};

const DrawerIcon = () => {
  return <Icon name="menu" color="black" />;
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
            <Drawer
              hideNavBar
              key="drawer"
              contentComponent={DrawerContent}
              drawerIcon={DrawerIcon}
              drawerWidth={300}
            >
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
                  title="好友"
                  iconname="view-list"
                  icon={TabIcon}
                />
                <Scene
                  key="chatlist"
                  component={ChatListScreen}
                  title="聊天"
                  iconname="chat"
                  icon={TabIcon}
                />
                <Scene
                  key="me"
                  component={MeScreen}
                  title="首頁"
                  iconname="home"
                  icon={TabIcon}
                />
              </Scene>
            </Drawer>
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
