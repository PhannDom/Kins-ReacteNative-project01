import React, {Component} from "react";
import {Text, View, Button} from "react-native";

class HttpExample04 extends Component {
   state = {
      data: ''
   }
   componentDidMount = (item) => {
      fetch('https://jsonplaceholder.typicode.com/posts' + '?' + item, {
      method: 'DELETE',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      }
   })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         +

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
            <Text>
               DELETE SUCCESS!
            </Text>

      )
   }
}
export default HttpExample04