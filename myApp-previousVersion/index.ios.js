import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Home from './src/components/home/Home.js'

class myApp extends Component {
   render() {
      return (
         <View>
            <Home />
         </View>
      );
   }
}
export default myApp

AppRegistry.registerComponent('myApp', () => myApp);
