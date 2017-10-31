import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ChatScreen extends Component {
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chat Screen</Text>
        <Text onPress={() => Actions.pop()}>Back</Text>
      </View>
    );
  }
}
