import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity,Button } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login"
          component={LoginScreen}
          title="Login"
          initial
        />
        <Scene
          key="home"
          component={HomeScreen}
          title="Home"
        />
      </Scene>
    </Router>
  );
}

export default App;
