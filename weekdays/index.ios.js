//improt code we need
//var React = require('react');
//var AppRegistry = React.AppRegistry;
//var Text = React.Text;
//var View = React.View;

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DayItem = require('./src/day-item.js')
var Moment = require('moment')
//var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wedneasday', 'Thursday', 'Friday', 'Saturday']
//Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    //return DAYS.map(function(day) {
      //Called once every day
      //console.log(day)
      //return <DayItem day={day} />
    //})
    
    var daysItems = [];
    for(var i = 0; i < 7; i++){
      var day = Moment().add(i,'days').format('dddd');
      daysItems.push(<DayItem day={day} daysUntil={i} />);
    }
    return daysItems;
  }
})


//Style react component
var styles = StyleSheet.create({
  container: {
    flex:1,
    //flexDirection: 'row',
    justifyContent:'center',//mover a lo alto --felx-end para ponerlo hasta abajo-- --flex-start lo manda hasta arriba--  *en row se invierte*
    alignItems:'center'//mover a lo ancho --felx-end para ponerlo hasta la derecha-- --flex-start lo manda hasta la izquierda--
  },
});


//Show the react component on the screen

AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});