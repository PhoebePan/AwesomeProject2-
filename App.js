import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity,Button } from 'react-native';
import { StackNavigator,DrawerNavigator  } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen></LoginScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1,
    padding: 50
  }
});
