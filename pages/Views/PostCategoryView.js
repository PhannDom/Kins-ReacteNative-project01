import React, {Component} from 'react';
import { AppRegistry, View, ListView, Text, ToolbarAndroid, TouchableHighlight, StyleSheet } from 'react-native';
import InputsCategory from '../Actions/InputsCategory'

export default class PostCategoryView extends Component {
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
			    	<Text>Go back to 1</Text>
			    </TouchableHighlight>
			</View>
	      	<InputsCategory />
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
  	back:{backgroundColor:"blue", color:"white", width:100, padding:15}
});

AppRegistry.registerComponent('PostCategoryView', () => PostCategoryView)
