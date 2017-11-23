import React from "react";
import { View, Text, Animated, Dimensions, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button } from "react-native-elements";
import styled from "styled-components/native";

import BaseLightbox from "./BaseLightbox";

const TargetDetailLightbox = children => (
  <BaseLightbox verticalPercent={0.7} horizontalPercent={0.9}>
    <Title>
      <Name>{children.title}</Name>
      <Close onPress={() => Actions.pop()}>X</Close>
    </Title>
    <TargetDetail>
      <Avatar
        resizeMode="contain"
        source={{
          uri: children.avatar_url
        }}
      />
      <Button
        title="聊天"
        icon={{ name: "chat" }}
        buttonStyle={{
          backgroundColor: "#79006E",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 10
        }}
        onPress={() => Actions.chat({ title: children.title })}
      />
    </TargetDetail>
  </BaseLightbox>
);

export default TargetDetailLightbox;

const Title = styled.View`
  flex-direction: row;
  background-color: #af66a8;
  justify-content: space-between;
  height: 40;
  margin-top: -21;
`;

const Name = styled.Text`
  margin-left: 15;
  color: white;
  font-size: 20;
  top: 5;
`;

const Close = styled.Text`
  color: white;
  width: 40;
  height: 40;
  justify-content: center;
  align-items: stretch;
  font-size: 20;
  top: 5;
`;

const TargetDetail = styled.View`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  justify-content: center;
  align-items: stretch;
  padding-left: 20;
  padding-right: 20;
  padding-top: 10;
  padding-bottom: 0;
`;

const Avatar = styled.Image`
  width: 300;
  height: 300;
  margin-left: 15;
`;
