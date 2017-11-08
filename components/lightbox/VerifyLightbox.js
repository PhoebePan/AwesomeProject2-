import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TextInput
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, FormLabel } from "react-native-elements";
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

const VerifyLightbox = data => (
  <BaseLightbox verticalPercent={0.6} horizontalPercent={0.9}>
    <View
      style={{
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0
      }}
    >
      <FormLabel>貼心提醒：</FormLabel>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text />
        <Text>
          未正式入會前，網站不會出現您的資料 在任何情況下，您的手機號碼都不會被公開
          輸入手機號碼，可看到每月之星的清晰照片，屬於您的緣份可能就在其中！
        </Text>
        <Text />
        <Text>手機: {data.mobile}</Text>
        <Text>驗證碼: {data.otpCode}</Text>
      </View>
      <FormLabel>驗證碼:</FormLabel>
      <TextInput
        placeholder="請輸入驗證碼"
        style={{ paddingLeft: 20, paddingRight: 20 }}
      />
      <Button
        icon={{ name: "favorite" }}
        title="登入"
        buttonStyle={{ backgroundColor: "#79006E" }}
        onPress={() => Actions.me()}
      />
    </View>
  </BaseLightbox>
);

export default VerifyLightbox;
