//import code
import React, { Component } from 'react';
import {
  //StyleSheet,
  Text,
} from 'react-native';

//create component
var DayItem = React.createClass({
  render: function(){
    return <Text style={this.style()} >
      {this.props.day}
    </Text>
  },
  style: function() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()   
    }
  },
  
  color: function() {
    var opacity = 1/this.props.daysUntil;
    return 'rgba(0, 0, 0,'+ opacity +')'
  },
  
  fontWeight: function() {
    var weight = 7-this.props.daysUntil;
    return (weight*100).toString();
  },
  
  fontSize: function() {
    var size = 60-6*this.props.daysUntil;
    return size;
  },
  
  lineHeight: function() {
    var height = 70-4*this.props.daysUntil;
    return height;
  }
  
})
//styles

//var styles = StyleSheet.create({
  //day: {
    //fontSize: 18,
    //color: '#0000ff'
  //}
//})

//export

module.exports = DayItem;