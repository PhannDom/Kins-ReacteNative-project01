import React, {Component} from 'react';
import { AppRegistry, View, ListView, Text, ToolbarAndroid, TouchableHighlight, StyleSheet } from 'react-native';
import Inputs from '../Actions/Inputs'

export default class PostView extends Component {
   	navHome(){
		this.props.navigator.push({
			id: 'home'
		});
	}
   render() {
      return (
      	<View>
	      	<View>
			    <ToolbarAndroid style={styles.toolbar} title = {this.props.title} />
			    <TouchableHighlight  onPress={this.navHome.bind(this)}>
			    	<Text style={ao.back}>Go back to 1</Text>
			    </TouchableHighlight>
			</View>
	      	<Inputs />
      	</View>
      )
   }
}

const styles = StyleSheet.create({
		toolbar: {
		height: 60,
		backgroundColor: 'red'
	}
});

const ao = StyleSheet.create({
	touch : {flex:1, alignItems:"center", borderWidth:2, borderColor: "red"},
  	view :{flex:1, backgroundColor:"white", alignItems:"center"},
  	id :{color:"red", fontSize:20},
  	title :{color:"blue", fontSize:25},
  	body :{color:"black", fontSize:15},
  	back:{backgroundColor:"black", color:"white", width:120, padding:15, fontSize:15}
});

AppRegistry.registerComponent('PostView', () => PostView)
