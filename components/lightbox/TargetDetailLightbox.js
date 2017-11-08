import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Button
} from "react-native";
import { Actions } from "react-native-router-flux";
import BaseLightbox from "./BaseLightbox";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  }
});

const TargetDetailLightbox = ({ children }) => (
  <BaseLightbox verticalPercent={0.5} horizontalPercent={0.9}>
    <Text>Target Detail Lightbox</Text>
    <Text>Allows transparency for background</Text>
    <Button title="Go to Chat Screen" onPress={() => Actions.chat()} />
    <Text onPress={() => Actions.pop()}>Back</Text>
  </BaseLightbox>
);

export default TargetDetailLightbox;
