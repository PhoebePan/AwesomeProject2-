import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity,Button } from 'react-native';
import { StackNavigator,DrawerNavigator  } from 'react-navigation';
import { HomeScreen } from './HomeScreen'
import { ChatScreen } from './ChatScreen'

const Login = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Login Screen</Text>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Login"
    />
  </View>
);

const LoginScreen = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  ChatList: {
    screen: ChatScreen,
    navigationOptions: {
      headerTitle: 'ChatList',
    },
  },
});

export default LoginScreen;

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
