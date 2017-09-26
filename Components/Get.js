import React, {Component} from "react";
import {Text, View, Button, ListView, StyleSheet, TouchableOpacity, Alert} from "react-native";
import HttpExample04 from '../Components/Delete.js'
import HttpExample03 from '../Components/Put.js'
import { Actions } from 'react-native-router-flux';

/*import Routes from '../Components/Routes.js'

const goToAbout = () => {
      Actions.about()
};*/

const onButtonPressEdit = () => {
  		Alert.alert('Edit!');
};
const onButtonPressDelete = () => {
  		Alert.alert('Delete!');
};

class HttpExample extends Component {

	constructor(props){
	    super(props);
	    this.state={
	      dataSource: new ListView.DataSource({
	        rowHasChanged:(r1, r2) => r1!==r2
	      }),
	    }
	  }
   componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
      	mang = responseJson;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(mang)
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
        <ListView

	        dataSource = {this.state.dataSource}
	        renderRow  = {(row)=>
	        	<TouchableOpacity style={ao.touch}>
	         	<View style={ao.view}>
		          	<Text style={ao.id}> ID: {row.id}</Text>
		            <Text style={ao.title}> Title: {row.title}</Text>
		            <Text style={ao.body}>Body: {row.body}</Text>
		            <Button
			          onPress = {
                  			() => {this.HttpExample03/*, {goToAbout}*/} 
               			}
			          title="Edit"
			          color="green"			    
			        />
		            <Button
			          onPress = {
                  			() => {this.HttpExample04.componentDidMount(this.row.id)} 
               			}
			          title="Delete"
			          color="red"
			        />
	          	</View>
	          	</TouchableOpacity>
	        }
	    />
      )
   }
}
export default HttpExample

var ao = StyleSheet.create({
	touch : {flex:1, alignItems:"center", borderWidth:2, borderColor: "red"},
  	view :{flex:1, backgroundColor:"white", alignItems:"center"},
  	id :{color:"red", fontSize:20},
  	title :{color:"blue", fontSize:25},
  	body :{color:"black", fontSize:15},
  	back:{backgroundColor:"blue", color:"white", width:100, padding:15}
});
