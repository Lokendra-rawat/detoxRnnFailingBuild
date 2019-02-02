/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { Navigation } from "react-native-navigation";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: undefined
    };
  }

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View testID='welcome' style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 65, marginBottom: 30 }}>
          Welcome
        </Text>
        <TouchableOpacity testID='hello_button' onPress={this.onButtonPress.bind(this, 'Hello')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='world_button' onPress={this.onButtonPress.bind(this, 'World')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Say World</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderAfterButton() {
    return (
      <View style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25 }}>
          {this.state.greeting}!!!
        </Text>
      </View>
    );
  }
  onButtonPress(greeting) {
    this.setState({
      greeting: greeting
    });
  }
}

// AppRegistry.registerComponent('example', () => Example);
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => Example);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});