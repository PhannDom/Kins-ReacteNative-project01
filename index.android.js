/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from "./Components/App.js"
import SimpleNavigationApp from "./src/index.js"

export default class DemoApp03 extends Component {
  render() {
    return (
      <SimpleNavigationApp />
    );
  }
}

AppRegistry.registerComponent('DemoApp03', () => DemoApp03);*/
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './pages/Menu/Routes.js'

class DemoApp03 extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default DemoApp03

AppRegistry.registerComponent('DemoApp03', () => DemoApp03)
