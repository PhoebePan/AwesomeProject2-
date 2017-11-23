import React from "react";
import { Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import styled from "styled-components/native";

class MenuList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        <Icon name={this.props.name} color={this.props.color} />
        <Button
          onPress={this.props.link}
          buttonStyle={{ backgroundColor: "white" }}
          textStyle={{
            color: "#5c5c5c",
            textAlign: "left",
            top: -10,
            left: -10
          }}
          title={this.props.title}
        />
      </List>
    );
  }
}

export default MenuList;

const List = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  padding-top: 10;
  padding-left: 10;
  background-color: white;
  height: 50;
`;
