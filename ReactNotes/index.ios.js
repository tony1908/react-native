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
  Navigator,
  View
} from 'react-native';
import SimpleButton from './app/components/SimpleButton.js'
import NoteScreen from './app/components/NoteScreen.js'
import HomeScreen from './app/components/HomeScreen.js'

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState){
    switch (route.name) {
      case 'createNote':
        return (
            <SimpleButton 
              onPress={() => {
                navigator.pop();
              }}
              customText='Back'
              />
        );
        default:
        return null;
    }
  },
  RightButton: function(route, navigator, index, navState){
      switch (route.name) {
      case 'Home':
        return (
            <SimpleButton 
              onPress={() => {
                navigator.push({
                  name: 'createNote'
                });
              }}
              customText='Create Note'
              />
        );
        default:
        return null;
    }
  },
  Title: function(route, navigator, index, navState){
    switch (route.name) {
      case 'Home':
        return (
            <Text>React Notes</Text>
        );
      case 'createNote':
        return (
          <Text>Create Note</Text>
        )
    }
  },
}

class ReactNotes extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'Home':
        return (
          <HomeScreen />
        );
        case 'createNote':
        return (
          <NoteScreen />
        )
    }
  }
  render() {
    return (
      <Navigator initialRoute={{name:'Home'}}
        renderScene={this.renderScene}
        navigationBar={
        <Navigator.NavigationBar
          routeMapper={NavigationBarRouteMapper}
          />
        }/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
