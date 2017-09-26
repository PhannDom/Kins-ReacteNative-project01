import React, {Component} from 'react';
import { AppRegistry, View, ListView, Text, Button, Alert, ToolbarAndroid, TouchableHighlight, StyleSheet } from 'react-native';
import updateCategory from '../Actions/EditCategory'

export default class EditCategoryView extends Component {

	constructor(props){
	    super(props);
	    this.state={
	      dataSource: new ListView.DataSource({
	        rowHasChanged:(r1, r2) => r1!==r2
	      }),
	    }
	  }
   	componentDidMount = () => {
      fetch('https://kins-node.herokuapp.com/categories', {
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

   	navHome(){
		this.props.navigator.push({
			id: 'home'
		});
	}

	onButtonPressUpdate = (id, data) => {
    	updateCategory(id, data)
    	Alert.alert("You have updated this Category!")
	};

   render() {
      return (
      	<View>
	      	<View>
			    <ToolbarAndroid style={styles.toolbar} title = {this.props.title} />
			    <TouchableHighlight  onPress={this.navHome.bind(this)}>
			    	<Text>Go back to 1</Text>
			    </TouchableHighlight>
			</View>
	      	<ListView
	      	  	dataSource = {this.state.dataSource}
		        renderRow  = {(row)=>
		        	
			      		<View style={ao.view}>
				          	<Text style={ao.id}> ID: {row._id}</Text>
				            <Text style={ao.name}> Name: {row.name}</Text>
				            <Button
			          		onPress = {this.onButtonPressUpdate.bind(this, row._id,  {"name": "PhannDom", "price": 5000 }   )}
			          		title="Edit"
			          		color="red"
			        		/>
				       </View>
			       
			    }
	      	/>
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
  	name :{color:"blue", fontSize:25},
  	price :{color:"black", fontSize:15},
  	back:{backgroundColor:"blue", color:"white", width:100, padding:15}
});

AppRegistry.registerComponent('EditCategoryView', () => EditCategoryView)
