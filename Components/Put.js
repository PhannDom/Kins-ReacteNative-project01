import React, {Component} from "react";
import {Text, View, Button} from "react-native";

class HttpExample03 extends Component {
   state = {
      data: ''
   }
   componentDidMount = (item) => {
      fetch('https://jsonplaceholder.typicode.com/posts' + '?' +item, {
      method: 'PUT',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
         body: JSON.stringify({
            title: 'PhannDom',
            body: 'six-part',
         })
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
            <Text>
               EDIT SUCCESS!
            </Text>
         </View>
      )
   }
}
export default HttpExample03