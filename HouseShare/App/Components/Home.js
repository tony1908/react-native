import React, { Component } from 'react'; 
var ListProperty = require('./ListProperty.js');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

var Home = React.createClass({
   _handleListProperty: function() {
      this.props.navigator.push({
        title: "List Properties",
        component: ListProperty
      })
  },
  render: function() {
    return (
      <View style={styles.container}>
      <View style={styles.topBox} />
      <View style={styles.bottomBox} />
      <View style={styles.topBox} >
      <TouchableHighlight
      style={styles.button}
      onPress= {this._handleListProperty }
      underlayColor='#99d9f4'
      >
        <Text style={styles.buttonText}>List properties</Text>
     </TouchableHighlight>
     <TouchableHighlight style={styles.button}
       underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Add House</Text>
    </TouchableHighlight>
    </View>
   </View>
); }
});



var styles = StyleSheet.create({
  container: {
     flex: 1,
    flexDirection: 'column'
      },
  image: {
    width: 70,
    height: 70
  },
  welcome: {
      fontSize: 25,
      textAlign: 'center'
    },
  button: {
  flex: 1,
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  alignSelf: 'stretch',
  justifyContent: 'center',
  margin: 10
},
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},



buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},
  
  topBox: {
    flex: 1,
            backgroundColor: '#CCE5FF'
        },
        bottomBox: {
            flex: 1,
        backgroundColor: '#FFFFCC',
         alignItems: 'center',
         justifyContent: 'center',

        }
    },
    );


module.exports = Home;