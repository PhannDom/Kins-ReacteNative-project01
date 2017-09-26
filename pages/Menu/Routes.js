import React, {Component} from 'react';
import { AppRegistry, View, Text, Navigator, Router, Scene } from 'react-native';
import Home from './Home';

//import Products
import GetListView from '../Views/GetListView';
import PostView from '../Views/PostView';
import DeleteView from '../Views/DeleteView';
import EditView from '../Views/EditView';

//import Categories
import GetListCategoryView from '../Views/GetListCategoryView';
import PostCategoryView from '../Views/PostCategoryView';
import DeleteCategoryView from '../Views/DeleteCategoryView';
import EditCategoryView from '../Views/EditCategoryView';

//import Users
import GetListUserView from '../Views/GetListUserView';
import PostUserView from '../Views/PostUserView';
import DeleteUserView from '../Views/DeleteUserView';
import EditUserView from '../Views/EditUserView';

class Routes extends Component {
	renderScene(route, navigator){
		switch(route.id){
			case 'home':
				return(<Home navigator={navigator} title='Home'/>);
			//case: Product
			case 'getlistview':
				return(<GetListView navigator={navigator} title='List of Products'/>);
			case 'postview':
				return(<PostView navigator={navigator} title='Add Product'/>);
			case 'deleteview':
				return(<DeleteView navigator={navigator} title='Delete Product'/>);	
			case 'editview':
				return(<EditView navigator={navigator} title='Edit Product'/>);
			//case: Category
			case 'getlistcategoryview':
				return(<GetListCategoryView navigator={navigator} title='List of Categories'/>);
			case 'postcategoryview':
				return(<PostCategoryView navigator={navigator} title='Add Category'/>);
			case 'deletecategoryview':
				return(<DeleteCategoryView navigator={navigator} title='Delete Category'/>);	
			case 'editcategoryview':
				return(<EditCategoryView navigator={navigator} title='Edit Category'/>);
			//case: User
			case 'getlistuserview':
				return(<GetListUserView navigator={navigator} title='List of Users'/>);
			case 'postuserview':
				return(<PostUserView navigator={navigator} title='Add User'/>);
			case 'deleteuserview':
				return(<DeleteUserView navigator={navigator} title='Delete User'/>);	
			case 'edituserview':
				return(<EditUserView navigator={navigator} title='Edit User'/>);	
		}
	}
   render() {
      return (
      	<Navigator
      		initialRoute = {{id: 'home'}}
      		renderScene = {this.renderScene}
      		configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      	/>
      )
   }
}
export default Routes;