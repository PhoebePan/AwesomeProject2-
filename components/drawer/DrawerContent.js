import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import Button from "react-native-button";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#79006E"
  }
});

class DrawerContent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Drawer Content</Text>
        <Button onPress={Actions.pop}> Back </Button>
      </View>
    );
  }
}

export default DrawerContent;
