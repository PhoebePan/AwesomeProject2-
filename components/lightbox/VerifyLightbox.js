import React from "react";
import { View, Text, Animated, Dimensions, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, FormLabel } from "react-native-elements";
import styled from "styled-components/native";

import BaseLightbox from "./BaseLightbox";

const VerifyLightbox = data => (
  <BaseLightbox verticalPercent={0.6} horizontalPercent={0.9}>
    <Container>
      <FormLabel>貼心提醒：</FormLabel>
      <DescriptionView>
        <Text />
        <Text>
          未正式入會前，網站不會出現您的資料
          在任何情況下，您的手機號碼都不會被公開
          輸入手機號碼，可看到每月之星的清晰照片，屬於您的緣份可能就在其中！
        </Text>
        <Text />
        <Text>手機: {data.mobile}</Text>
        <Text>驗證碼: {data.otpCode}</Text>
      </DescriptionView>
      <FormLabel>驗證碼:</FormLabel>
      <VerifyInput placeholder="請輸入驗證碼" />
      <Button
        icon={{ name: "favorite" }}
        title="登入"
        buttonStyle={{ backgroundColor: "#79006E" }}
        onPress={() => Actions.home()}
      />
    </Container>
  </BaseLightbox>
);

export default VerifyLightbox;

const Container = styled.View`
  padding-top: 20;
  padding-left: 20;
  padding-right: 20;
  padding-bottom: 0;
`;

const DescriptionView = styled.View`
  padding-left: 20;
  padding-right: 20;
`;

const VerifyInput = styled.TextInput`
  padding-left: 20;
  padding-right: 20;
`;
