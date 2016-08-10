import React, { Component } from 'react';
import {
  //AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight
  
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight style={styles.button} underlayColor={'gray'} onPress={this.props.onPress}>
        <Text style={styles.buttonText} >{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
});


var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    //align: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 10
  },
  buttonText:{
    flex:1,
    alignSelf: 'center',
    fontSize: 20
  }
})