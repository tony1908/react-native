import React, { Component } from 'react';
import {
  //AppRegistry,
  StyleSheet,
  Text,
  View, 
  Navigator
} from 'react-native';
var Signin = require('./components/authentication/signin.js')
var Signup = require('./components/authentication/signup.js')
var Tweets = require('./components/tweets/tweets.js')
var Parse = require('parse/react-native');
var ROUTES = {
  signin: Signin,
  signup: Signup,  
  tweets: Tweets
};

module.exports = React.createClass({
  componentWillMount: function(){
    Parse.initialize( "rTMzQTeQmU0V3MAzPNhH9Xrc2lOvYEnHCXunfOah", "EVbeGO5sVJ3LKzxEZxkLskHhOYSe2Dx2ikzdpDWU", "c7HvkahzFvrmgmoeN0aLsIGajvqgCooGLmtEdvuo" ) 
  },
  
  renderScene: function(route, navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator}/>
  }, 
  
  render: function(){
    return (
      <View style={styles.container}>
       <Navigator 
         style={styles.container}
         initialRoute={{name:'signin'}}
         renderScene={this.renderScene}
         //configureScene={() => {Navigator.SceneConfigs.FloatFromBottom}}
         />
      </View>
    );
  }
  
  
});

var styles = StyleSheet.create({
  container:{
    flex:1
  }
})