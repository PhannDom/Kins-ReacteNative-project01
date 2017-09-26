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
      			<Text>List of Products</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navPostView.bind(this)}>
      			<Text>Create a product</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navDeleteView.bind(this)}>
      			<Text>Delete a product</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navEditView.bind(this)}>
      			<Text>Edit a product</Text>
      		</TouchableHighlight>
      		<Text>--------------------------------------------------------------------------------------------</Text>
      		<TouchableHighlight  onPress={this.navGetListCategoryView.bind(this)}>
      			<Text>List of Categories</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navPostCategoryView.bind(this)}>
      			<Text>Create a Category</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navDeleteCategoryView.bind(this)}>
      			<Text>Delete a Category</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navEditCategoryView.bind(this)}>
      			<Text>Edit a Category</Text>
      		</TouchableHighlight>
      		<Text>--------------------------------------------------------------------------------------------</Text>
      		<TouchableHighlight  onPress={this.navGetListUserView.bind(this)}>
      			<Text>List of Users</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navPostUserView.bind(this)}>
      			<Text>Create a Users</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navDeleteUserView.bind(this)}>
      			<Text>Delete a Users</Text>
      		</TouchableHighlight>
      		<TouchableHighlight  onPress={this.navEditUserView.bind(this)}>
      			<Text>Edit a Users</Text>
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
	}
});


AppRegistry.registerComponent('Home', () => Home)
