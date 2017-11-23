import React from "react";
import { Text, View, ViewPropTypes } from "react-native";
import { Button, Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import styled from "styled-components/native";

import MenuList from "./MenuList";

class DrawerContent extends React.Component {
  render() {
    return (
      <Container>
        <MenuList
          name={"home"}
          color={"pink"}
          link={() => Actions.home()}
          title={"首頁"}
        />
        <MenuList
          name={"view-list"}
          color={"pink"}
          link={() => Actions.targetlist()}
          title={"好友"}
        />
        <MenuList
          name={"chat"}
          color={"pink"}
          link={() => Actions.chatlist()}
          title={"聊天"}
        />
        <MenuList
          name={"close"}
          color={"pink"}
          link={() => Actions.login()}
          title={"登出"}
        />
      </Container>
    );
  }
}

export default DrawerContent;

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
  background-color: transparent;
`;
