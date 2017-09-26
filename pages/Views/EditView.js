import React, {Component} from 'react';
import Prompt from 'react-native-prompt';
import { AppRegistry, View, ListView, Text, TextInput, Button, Alert, TouchableOpacity,ToolbarAndroid, TouchableHighlight, StyleSheet } from 'react-native';
import updateProduct from '../Actions/Edit';

export default class EditView extends Component {

	constructor(props){
	    super(props);
	    this.state={
	      	dataSource: new ListView.DataSource({
	        	rowHasChanged:(r1, r2) => r1!==r2
	      	}),
	      	name: '',
      		price: ''
	    }
	  }
   	componentDidMount = () => {
      fetch('https://kins-node.herokuapp.com/products', {
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

	handleName = (text) => {
      this.setState({ name: text })
   	}
   	handlePrice = (text) => {
      this.setState({ price: text })
   	}
   	onButtonPressUpdate = (id, name, price) => {
      var data = {
         "name": name,
         "price": price
      }
      updateProduct(id, data)
      Alert.alert("You have updated this Product!")
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
			      		<View style={styles1.container}>
				          	<Text style={ao.id}> ID: {row._id}</Text>
				            <Text style={ao.name}> Name: {row.name}</Text>
				            <Text style={ao.price}> Price: {row.price + '$'}</Text>

				      
				            <View style = {styles1.container}>
					        <TextInput style = {styles1.input}
					               underlineColorAndroid = "transparent"
					               placeholder = "Name"
					               placeholderTextColor = "#9a73ef"
					               autoCapitalize = "none"
					               onChangeText = {this.handleName}/>
					            
					        <TextInput style = {styles1.input}
					               underlineColorAndroid = "transparent"
					               placeholder = "Price"
					               placeholderTextColor = "#9a73ef"
					               autoCapitalize = "none"
					               onChangeText = {this.handlePrice}/>
					               
					        <Button
					            
					            onPress = { () => this.onButtonPressUpdate(row._id, this.state.name, this.state.price) }
					        	title="Update"
			          			color="green"
					        />
					        </View>
         				   
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

const styles1 = StyleSheet.create({
   container: {
      paddingTop: 15,
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      alignItems:"center"
   }
})

AppRegistry.registerComponent('EditView', () => EditView)
