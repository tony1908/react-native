import React, { Component } from 'react';
import {
  //AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

var Button = require('../common/button.js');
var Parse = require('parse/react-native');
 
module.exports = React.createClass({
  
    getInitialState: function() { 
    return {
      username: '',
      password: '',
      errorMessage: '',
      passwordConfirmation: ''
   };
  },
  
  render: function(){
    return(
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username:text})}/>
        <Text style={styles.label}>Password:</Text>
          <TextInput secureTextEntry={true} style={styles.input}
            value={this.state.password}
            onChangeText={(text) => this.setState({password:text})}/>
        <Text style={styles.label}>Confirm Password:</Text>
          <TextInput secureTextEntry={true} style={styles.input}
            value={this.state.passwordConfirmation}
            onChangeText={(text) => this.setState({passwordConfirmation:text})}/>
         <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button  text={"I have an acount..."} onPress={this.onSignInPress}/>
        <Button  text={"Sign Up"} onPress={this.onSignupPress}/>
      </View>
    )
  },
  
  onSignInPress: function(){
    this.props.navigator.pop()
  },
  
  onSignupPress: function() {
    if(this.state.password !== this.state.passwordConfirmation) {
      return this.setState({errorMessage:"mal password diferente"})
    }
    var user = new Parse.User();
      user.set("username",this.state.username );
      user.set("password", this.state.password);
      user.signUp(null, {
        success: function(user) {
           this.props.navigator.inmediatlyResetRouteStack([{name:'tweets'}])
           console.log(user)
        },
        error: function(user, error) {
         // console.log(error)
          this.setState({errorMessage:error.message})
        }
      });
  }
})

var styles = StyleSheet.create({
   container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width:200,
    alignSelf: 'center'
  }, 
  label: {
    fontSize: 18
  }
})