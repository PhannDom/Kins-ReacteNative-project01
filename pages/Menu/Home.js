import React, {Component} from 'react';
import { AppRegistry, View, Text, ToolbarAndroid, TouchableHighlight, StyleSheet } from 'react-native';


export default class Home extends Component {

	//Product
	navGetListView(){
		this.props.navigator.push({
			id: 'getlistview'
		});
	}
	navPostView(){
		this.props.navigator.push({
			id: 'postview'
		});
	}
	navDeleteView(){
		this.props.navigator.push({
			id: 'deleteview'
		});
	}
	navEditView(){
		this.props.navigator.push({
			id: 'editview'
		});
	}

	//Category
	navGetListCategoryView(){
		this.props.navigator.push({
			id: 'getlistcategoryview'
		});
	}
	navPostCategoryView(){
		this.props.navigator.push({
			id: 'postcategoryview'
		});
	}
	navDeleteCategoryView(){
		this.props.navigator.push({
			id: 'deletecategoryview'
		});
	}
	navEditCategoryView(){
		this.props.navigator.push({
			id: 'editcategoryview'
		});
	}

	//User
	navGetListUserView(){
		this.props.navigator.push({
			id: 'getlistuserview'
		});
	}
	navPostUserView(){
		this.props.navigator.push({
			id: 'postuserview'
		});
	}
	navDeleteUserView(){
		this.props.navigator.push({
			id: 'deleteuserview'
		});
	}
	navEditUserView(){
		this.props.navigator.push({
			id: 'edituserview'
		});
	}
   render() {
      return (
      	<View>
      		<View>
      		<ToolbarAndroid style={styles.toolbar} title = {this.props.title} />
      		<TouchableHighlight  onPress={this.navGetListView.bind(this)}>
      			<Text style={styles.text}>List of Products</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navPostView.bind(this)}>
      			<Text style={styles.text}>Create a product</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navDeleteView.bind(this)}>
      			<Text style={styles.text}>Delete a product</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navEditView.bind(this)}>
      			<Text style={styles.text}>Edit a product</Text>
      		</TouchableHighlight>
      		<Text>--------------------------------------------------------------------------------------------</Text>
      		<TouchableHighlight  onPress={this.navGetListCategoryView.bind(this)}>
      			<Text style={styles.text}>List of Categories</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navPostCategoryView.bind(this)}>
      			<Text style={styles.text}>Create a Category</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navDeleteCategoryView.bind(this)}>
      			<Text style={styles.text}>Delete a Category</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navEditCategoryView.bind(this)}>
      			<Text style={styles.text}>Edit a Category</Text>
      		</TouchableHighlight>
      		<Text>--------------------------------------------------------------------------------------------</Text>
      		<TouchableHighlight  onPress={this.navGetListUserView.bind(this)}>
      			<Text style={styles.text}>List of Users</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navPostUserView.bind(this)}>
      			<Text style={styles.text}>Create a Users</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navDeleteUserView.bind(this)}>
      			<Text style={styles.text}>Delete a Users</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navEditUserView.bind(this)}>
      			<Text style={styles.text}>Edit a Users</Text>
      		</TouchableHighlight>
      		</View>
      	</View>
      )
   }
}

const styles = StyleSheet.create({
		toolbar: {
		height: 60,
		backgroundColor: 'red'
	},
	text:{
		fontSize:20
	}
});


AppRegistry.registerComponent('Home', () => Home)
