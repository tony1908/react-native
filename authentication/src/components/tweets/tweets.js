import React, { Component } from 'react';
import {
  //AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

module.exports = React.createClass({
  render: function(){
    return(
  <View style={styles.container}>
    <Text>Welcome back</Text>
  </View>
  )
  }
})


var styles = StyleSheet.create({
  container: {
      flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

