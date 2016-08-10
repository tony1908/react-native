/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'; 
var Home = require('./App/Components/Home.js');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  TouchableHighlight
} from 'react-native';


// class HouseShare extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Hola mundox
//         </Text>
//       </View> 
//     );
//   }
// }

var mainView = React.createClass ({
  render: function() {
    return (
       <NavigatorIOS barTintColor='#48BBEC' titleTextColor= "#FFFFFF" style={styles.
      navigator} initialRoute={{
        title: 'House Share',
        component: Home
      }}
        />
        );
    },
   });


  //  var Home = React.createClass({
  //   render: function() {
  //     return (
  //       <View style={styles.container}>
  //         <View style={styles.topBox} >
  //         </View>
  //         <View style={styles.bottomBox} >
  //             <Image source={require('image!home')} style={styles.image}/>
  //         </View>
  //           <View style={styles.topBox} >
  //         </View>
  //      </View>

  // ); }
  // });

// var Home = React.createClass({
//   render: function() {
//     return (
//       <View style={styles.container}>
//       <View style={styles.topBox} />
//       <View style={styles.bottomBox} />
//       <View style={styles.topBox} >
//       <TouchableHighlight style={styles.button}
//       underlayColor='#99d9f4'>
//         <Text style={styles.buttonText}>Show Houses</Text>
//      </TouchableHighlight>
//      <TouchableHighlight style={styles.button}
//        underlayColor='#99d9f4'>
//         <Text style={styles.buttonText}>Add House</Text>
//     </TouchableHighlight>
//     </View>
//    </View>
// ); }
// });

// var Home = React.createClass({
//    _handleListProperty: function() {
//     console.log("Boton apretado");
//   },
//   render: function() {
//     return (
//       <View style={styles.container}>
//       <View style={styles.topBox} />
//       <View style={styles.bottomBox} />
//       <View style={styles.topBox} >
//       <TouchableHighlight
//       style={styles.button}
//       onPress= {this._handleListProperty }
//       underlayColor='#99d9f4'
//       >
//         <Text style={styles.buttonText}>List properties</Text>
//      </TouchableHighlight>
//      <TouchableHighlight style={styles.button}
//        underlayColor='#99d9f4'>
//         <Text style={styles.buttonText}>Add House</Text>
//     </TouchableHighlight>
//     </View>
//    </View>
// ); }
// });





// var styles = StyleSheet.create({
//   container: {
//      flex: 1,
//     flexDirection: 'column'
//       },
//   image: {
//     width: 70,
//     height: 70
//   },
//   welcome: {
//       fontSize: 25,
//       textAlign: 'center'
//     },
//   button: {
//   flex: 1,
//   backgroundColor: '#48BBEC',
//   borderColor: '#48BBEC',
//   borderWidth: 1,
//   borderRadius: 8,
//   alignSelf: 'stretch',
//   justifyContent: 'center',
//   margin: 10
// },
// buttonText: {
//   fontSize: 18,
//   color: 'white',
//   alignSelf: 'center'
// },



// buttonText: {
//   fontSize: 18,
//   color: 'white',
//   alignSelf: 'center'
// },
//   navigator: {
//     flex: 1 },
//   topBox: {
//     flex: 1,
//             backgroundColor: '#CCE5FF'
//         },
//         bottomBox: {
//             flex: 1,
//         backgroundColor: '#FFFFCC',
//          alignItems: 'center',
//          justifyContent: 'center',

//         }
//     },
//     );

var styles = StyleSheet.create({

  navigator: {
    flex: 1 },
    },
    );



AppRegistry.registerComponent('HouseShare', () => mainView);
