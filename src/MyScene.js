import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class MyScene extends Component {
  render() {
    return (
      <View style={ao.view}>
        <Text style={ao.title}>Current Scene: {this.props.title}</Text>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text style={ao.search}>Search Products</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text style={ao.search}>Add Products</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text style={ao.back}>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

const ao = StyleSheet.create({
    view :{flex:1, backgroundColor:"white", alignItems:"center"},
    title :{color:"blue", fontSize:25},
    search :{color:"black", fontSize:20},
    back:{color:"black", fontSize:20}
});