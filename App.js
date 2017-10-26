import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './components/Input';
import { Button } from './components/Button';

const remoteBg = 'https://chaos-dev.yuelaobank.com/src/img_banner/p_sign.png';
const remoteBgIndex = 'https://chaos-dev.yuelaobank.com/src/img_banner/background.jpg'

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    authenticating: false,
    user: null,
    error: '',
  }

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDluZRqZwmKvqtlKkcwBdhUwzMFFNo5lkE',
      authDomain: 'react-native-project-5d00f.firebaseapp.com',
    }

    firebase.initializeApp(firebaseConfig);
  }

  onPressSignIn() {
    this.setState({
      authenticating: true,
    });

    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => this.setState({
        authenticating: false,
        user,
        error: '',
      }))
      .catch(() => {
        // Login was not successful
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => this.setState({
            authenticating: false,
            user,
            error: '',
          }))
          .catch(() => this.setState({
            authenticating: false,
            user: null,
            error: 'Authentication Failure',
          }))
      })
  }

  onPressLogOut() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          email: '',
          password: '',
          authenticating: false,
          user: null,
        })
      }, error => {
        console.error('Sign Out Error', error);
      });
  }

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    if (this.state.user !== null) {
      return (
        <View style={styles.form}>
          <Text>Logged In</Text>
          <Button onPress={() => this.onPressLogOut()}>Log Out</Button>
        </View>
      )
    }

    return (
      <Image
        style={styles.bgimg}
        source={{ uri: remoteBg }}
      >
        <View style={styles.form}>
          <Input
            placeholder='Enter your email...'
            label='Email'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <Input
            placeholder='Enter your password...'
            label='Password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button onPress={() => this.onPressSignIn()}>開始幸福</Button>
          <Text>{this.state.error}</Text>
        </View>
      </Image>
    )

  }

  render() {
    return (
      <Image 
        style={styles.bgindex}
        source={{ uri: remoteBgIndex }}
      >
        <View style={styles.container}>
          {this.renderCurrentState()}
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  bgindex: {
    flex: 1,
  },
  bgimg: {
    flex: 1,
    width: null,
    height: null,
    paddingTop: 110,
    resizeMode: 'cover',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1,
    padding: 50
  }
});