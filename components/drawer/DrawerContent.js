import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "transparent"
  },
  menulist: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: "white",
    height: 50
  },
  icon: {
    flex: 1
  },
  iconLabel: {
    flex: 4
  }
});

class DrawerContent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menulist}>
          <Icon style={styles.icon} name="home" color="pink" />
          <Button
            style={styles.iconLabel}
            onPress={() => Actions.home()}
            buttonStyle={{ backgroundColor: "white" }}
            textStyle={{ color: "#5c5c5c", textAlign: "left", top: -10 }}
            title={`首頁`}
          />
        </View>
        <View style={styles.menulist}>
          <Icon style={styles.icon} name="view-list" color="pink" />
          <Button
            style={styles.iconLabel}
            onPress={() => Actions.targetlist()}
            buttonStyle={{ backgroundColor: "white" }}
            textStyle={{ color: "#5c5c5c", textAlign: "left", top: -10 }}
            title={`好友`}
          />
        </View>
        <View style={styles.menulist}>
          <Icon style={styles.icon} name="chat" color="pink" />
          <Button
            style={styles.iconLabel}
            onPress={() => Actions.chatlist()}
            buttonStyle={{ backgroundColor: "white" }}
            textStyle={{ color: "#5c5c5c", textAlign: "left", top: -10 }}
            title={`聊天`}
          />
        </View>
        <View style={styles.menulist}>
          <Icon style={styles.icon} name="close" color="pink" />
          <Button
            style={styles.iconLabel}
            onPress={Actions.pop}
            buttonStyle={{ backgroundColor: "white" }}
            textStyle={{ color: "#5c5c5c", textAlign: "left", top: -10 }}
            title={`關閉`}
          />
        </View>
      </View>
    );
  }
}

export default DrawerContent;
