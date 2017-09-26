import React, {Component} from 'react';
import { AppRegistry, View, ListView, Text, Button, Alert, ToolbarAndroid, TouchableHighlight, StyleSheet } from 'react-native';
import DeleteProduct from '../Actions/Delete'


export default class DeleteView extends Component {

	constructor(props){
	    super(props);
	    this.state={
	      dataSource: new ListView.DataSource({
	        rowHasChanged:(r1, r2) => r1!==r2
	      }),
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

    onButtonPressDelete = (id) => {
    	DeleteProduct(id).then(res => {

        	this.props.navigator.push({
				id: 'deleteview'
			});
    	})
    	Alert.alert('You had deleted sucessful!')

	};

	navDeleteView(){
		this.props.navigator.push({
			id: 'deleteview'
		});
	}

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
	      	<ListView
	      	  	dataSource = {this.state.dataSource}
		        renderRow  = {(row)=>
		        	
			      		<View style={ao.view}>
				          	<Text style={ao.id}> ID: {row._id}</Text>
				            <Text style={ao.name}> Name: {row.name}</Text>
				            <Text style={ao.price}> Price: {row.price}</Text>
				            <Button
			          		onPress = {this.onButtonPressDelete.bind(this, row._id)}
			          		title="Delete"
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
  	title :{color:"blue", fontSize:25},
  	body :{color:"black", fontSize:15},
  	back:{backgroundColor:"black", color:"white", width:120, padding:15, fontSize:15}
});

AppRegistry.registerComponent('DeleteView', () => DeleteView)
