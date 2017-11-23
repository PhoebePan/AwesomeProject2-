import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, FormLabel, FormInput } from "react-native-elements";
import styled from "styled-components/native";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      otpCode: ""
    };
  }

  _getOtpCode() {
    fetch("http://www.json-generator.com/api/json/get/cgwltklkGG?indent=2")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            mobile: responseJson.mobile,
            otpCode: responseJson.otpCode
          },
          function() {
            Actions.verify_lightbox(this.state);
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <Container>
        <LoginBg source={require("../images/p_sign.png")}>
          <FormLabel>手機登入，開始幸福</FormLabel>
          <FormInput
            placeholder="請輸入手機號碼"
            onChangeText={mobile => this.setState({ mobile })}
            value={this.state.mobile}
          />
          <Button
            large
            buttonStyle={{ backgroundColor: "#79006E" }}
            textStyle={{ textAlign: "center" }}
            title={`開始幸福`}
            onPress={() => {
              this._getOtpCode();
            }}
          />
        </LoginBg>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

const LoginBg = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: stretch;
`;
