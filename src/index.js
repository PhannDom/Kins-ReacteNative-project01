import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet } from 'react-native';

import MyScene from '../src/MyScene';

const nextIndex = 1;

export default class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed

            onForward={() => {    
              //const nextIndex = route.index + 1;
              navigator.push(/*{
                title: 'Scene ' + 1,
                index: 1,
              }*/);
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}
/*AppRegistry.registerComponent('SimpleNavigationApp', () => SimpleNavigationApp);*/