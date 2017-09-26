import React, {Component} from 'react';
import { AppRegistry, View, ListView, Text, ToolbarAndroid, TouchableHighlight, StyleSheet } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter'

export default class GetListView extends Component {

	constructor(props){
	    super(props);
	    this.state={
	      dataSource: new ListView.DataSource({
	        rowHasChanged:(r1, r2) => r1!==r2
	      }),
	      searchTerm: ''
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

	searchUpdated(term) {
    	this.setState({ searchTerm: term })
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
	      	<ListView
	      	  	dataSource = {this.state.dataSource}
		        renderRow  = {(row)=>
		        	
			      		<View style={ao.view}>
				          	<Text style={ao.id}> ID: {row.id}</Text>
				            <Text style={ao.name}> Name: {row.name}</Text>
				            <Text style={ao.price}> Price: {row.price + '$'}</Text>
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

AppRegistry.registerComponent('GetListView', () => GetListView)
